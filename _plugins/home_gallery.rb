# Discovers homepage carousel images directly from the filesystem so that
# the gallery works in every language. jekyll-polyglot excludes `assets/`
# from `site.static_files` in non-default languages, so relying on
# `site.static_files` only works for the default language.
module Jekyll
  class HomeGalleryGenerator < Generator
    safe true
    priority :low

    GALLERY_DIR = 'assets/img/website_covers'
    IMAGE_EXTENSIONS = %w[.jpg .jpeg .png].freeze

    def generate(site)
      dir = File.join(site.source, GALLERY_DIR)
      return unless Dir.exist?(dir)

      images = Dir.children(dir).select { |name|
        IMAGE_EXTENSIONS.include?(File.extname(name).downcase) &&
          File.file?(File.join(dir, name))
      }.sort.map { |name| "/#{GALLERY_DIR}/#{name}" }

      site.data['home_gallery_images'] = images
    end
  end
end
