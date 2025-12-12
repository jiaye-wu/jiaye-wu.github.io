require "active_support/all"
require "nokogiri"
require "open-uri"
require "json"

module Helpers
  extend ActiveSupport::NumberHelper
end

module Jekyll
  class GoogleScholarCitationsTag < Liquid::Tag
    Citations = {}
    CacheData = nil

    def initialize(tag_name, params, tokens)
      super
      splitted = params.split(" ").map(&:strip)
      @scholar_id = splitted[0]
      @article_id = splitted[1]

      puts "Invalid scholar_id provided" if @scholar_id.nil? || @scholar_id.empty?
      puts "Invalid article_id provided" if @article_id.nil? || @article_id.empty?
    end

    def render(context)
      site_config = context.registers[:site].config
      human_readable = site_config["gs_human_readable"]
      gs_cache_url = site_config["gs_cache_url"]

      article_id = context[@article_id.strip]
      scholar_id = context[@scholar_id.strip]
      cache_key = "#{scholar_id}:#{article_id}"
      article_url = "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=#{scholar_id}&citation_for_view=#{cache_key}"

      # Return cached result if already available
      if GoogleScholarCitationsTag::Citations[cache_key]
        return GoogleScholarCitationsTag::Citations[cache_key]
      end

      citation_count = nil

      begin
        # Sleep to avoid being blocked
        sleep(rand(1.5..3.5))

        # Try to fetch real-time data
        doc = Nokogiri::HTML(URI.open(article_url, "User-Agent" => "Ruby/#{RUBY_VERSION}"))
        description_meta = doc.css('meta[name="description"]')
        og_description_meta = doc.css('meta[property="og:description"]')

        if !description_meta.empty?
          matches = description_meta[0]['content'].match(/Cited by (\d+[,\d]*)/)
          citation_count = matches[1].delete(",").to_i if matches
        elsif !og_description_meta.empty?
          matches = og_description_meta[0]['content'].match(/Cited by (\d+[,\d]*)/)
          citation_count = matches[1].delete(",").to_i if matches
        end

        raise "No citation found in HTML" if citation_count.nil?
      rescue => e
        puts "Error fetching citation for #{cache_key}: #{e.class} - #{e.message}"

        # Attempt to load from fallback JSON
        begin
          json_raw = URI.open(gs_cache_url, "User-Agent" => "Ruby/#{RUBY_VERSION}").read
          fallback_data = JSON.parse(json_raw)

          if fallback_data["publications"] && fallback_data["publications"][cache_key]
            citation_count = fallback_data["publications"][cache_key]["num_citations"].to_i
          else
            puts "No cached citation found for #{cache_key} in fallback JSON"
            citation_count = nil
          end
        rescue => e2
          puts "Failed to load fallback JSON: #{e2.class} - #{e2.message}"
          citation_count = nil
        end
      end

      # Format citation count
      if citation_count.nil?
        citation_text = "N/A"
      else
        citation_text = human_readable ?
          Helpers.number_to_human(citation_count, format: '%n%u', precision: 2, units: { thousand: 'K', million: 'M', billion: 'B' }) :
          citation_count.to_s
      end

      # Cache and return
      GoogleScholarCitationsTag::Citations[cache_key] = citation_text
      return citation_text
    end
  end
end

Liquid::Template.register_tag('google_scholar_citations', Jekyll::GoogleScholarCitationsTag)