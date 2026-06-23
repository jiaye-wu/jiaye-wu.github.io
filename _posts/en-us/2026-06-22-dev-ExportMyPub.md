---
layout: post
title: "[Academic Tool] ExportMyPub Project"
date: 2026-06-22 11:19:00
description: a cross-platform, local-first modern publication export manager
tags:
  - academic tool
  - github
  - google scholar
  - python
  - software
  - windows
  - open source
categories:
  - development
  - research blog
thumbnail: assets/img/post_covers/ExportMyPub.png
toc:
  sidebar: left
---

The repository is hosted on [GitHub](https://github.com/jiaye-wu/ExportMyPub).

# ExportMyPub

**Cross-platform · Local-first · Windows · macOS · Linux · Modern Publication Export Manager**

<div class="row mt-3">
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-main-en.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/post_contents/ExportMyPub-export-en.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>

ExportMyPub is a client-side Progressive Web App for BibTeX statistics, authorship filtering, publication review, and citation export. It runs in modern browsers on Windows, macOS, and Linux. A user-selected `.bib` file remains the sole source of publication records: the application reads it locally and never modifies or uploads it.

## Project scope and disclaimer

ExportMyPub is developed primarily for the maintainer's personal workflow. Feature requests, suggestions, and constructive feedback are welcome, but there is no promise that any request will be accepted, prioritized, implemented, or maintained.

This project is provided **as is**, without warranties or guarantees of correctness, completeness, fitness for a particular purpose, or continued availability. Users are responsible for reviewing parsed records, statistics, author-role classifications, citation output, generated documents, and ScholarBot associations before relying on them. Keep independent backups and confirm that generated material meets the rules of the relevant institution, funder, publisher, or application process.

To the fullest extent permitted by applicable law, the maintainer accepts no liability for data loss, incorrect statistics, misclassified authorship, rejected submissions, document incompatibility, reputational harm, or any other direct or indirect consequence arising from the use or inability to use this project.

## Features

- Read-only local BibTeX import with drag-and-drop support.
- Author detection with aliases, initials, strict matching, and optional hyphen normalization.
- Filters for first, last, nth, corresponding, and joint-first authorship.
- Filters for title keywords, year ranges, publication types, and representative works.
- Separate dashboards for BibTeX statistics and optional ScholarBot metrics.
- Annual trends, cumulative totals, authorship summaries, citation trends, and collaborator rankings.
- Table and card views, highlighted target authors, author-position display, sortable headers, linked column resizing, and drag-to-reorder.
- Representative-work bookmarks and reusable named ordering schemes stored by citekey.
- Live citation preview and export to TXT, Markdown, DOCX, or ODT.
- Custom citation templates with field validation, automatic omission of missing fields, and simple bold/italic markup.
- English and Simplified Chinese interfaces, light/dark/system themes, installable PWA behavior, and offline use.

## Quick start

### Requirements

- Node.js 20 or newer
- pnpm

```bash
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

Open <http://127.0.0.1:5173> if the browser does not open automatically.

### Moving to another computer

Do not copy `node_modules/` or pnpm cache directories between machines. They can contain platform-specific packages, executables, filesystem links, and store metadata.

Copy or clone the source repository, including `package.json`, `pnpm-lock.yaml`, `pnpm-workspace.yaml`, and `.npmrc`, then recreate dependencies locally:

```bash
pnpm install --frozen-lockfile --ignore-scripts
```

pnpm recreates `node_modules/` and automatically downloads or reuses the receiving machine's cache. The convenience launchers intentionally do not install dependencies.

### Convenience launchers

On Windows, double-click `launch_app.cmd` after dependencies have been installed. The window remains open so startup errors can be read.

On Linux and other POSIX systems:

```bash
chmod +x launch_app.sh
./launch_app.sh
```

Set `EXPORTMYPUB_NO_OPEN=1` to prevent the Linux launcher from opening a browser. Both launchers bind the app to `127.0.0.1`; they do not download packages or modify a bibliography.

### Production build

```bash
pnpm build
pnpm audit:prod
```

The production bundle is written to `dist/`.

## Data model and privacy

BibTeX is the only authoritative source for the publication list and exported citations. ScholarBot data is an optional enrichment layer and cannot add, remove, or overwrite BibTeX records.

The bibliography is processed with the browser File API. ExportMyPub does not upload it and does not call writable file-handle APIs. Chromium-based browsers may retain a read-only file handle in IndexedDB; other browsers can select or drop the file again.

Local state may include:

- target-author names and aliases;
- representative-work decisions keyed by citekey;
- named ordering schemes;
- custom citation templates;
- the ScholarBot URL and its last successful cache;
- theme, language, view mode, and column widths.

Clearing browser site data removes these settings but never affects the source `.bib` file.

## Author matching

- `Alice Example` is interpreted as “given name + family name”.
- `Example, Alice` is interpreted as “family name, given name”.
- Separate aliases with semicolons, for example `Alice Example; Example, Alice; 王小明`.
- Full-width punctuation and whitespace are normalized before matching.
- Normal mode recognizes full-name order variants and common initial forms.
- Strict mode accepts full names and their order variants; explicitly entered abbreviated aliases remain valid.
- “Ignore hyphens” controls whether forms such as `Anne-Marie` and `Anne Marie` are treated as equivalent.
- Chinese aliases are matched as complete strings rather than automatically split into family and given names.

After a bibliography is loaded, ExportMyPub suggests the most frequent fully written author name.

## Authorship markers in BibTeX

ExportMyPub can interpret markers appended to author names:

- `†` — joint-first author;
- `*` — corresponding author;
- `†*` — both roles.

These markers are removed only from in-memory matching and display values. The source BibTeX is never rewritten. The in-app “Writing BibTeX” dialog provides a fictional downloadable `example.bib`.

```bibtex
@article{ExampleArticle2026,
  title   = {A Fictional Study of Reproducible Widgets},
  author  = {Researcher†, Alice and Scientist†*, Bob and Scholar*, Carol},
  journal = {Journal of Imaginary Results},
  year    = {2026},
  volume  = {4},
  number  = {2},
  pages   = {101--112}
}
```

## Publication type grouping

| BibTeX entry type                                        | Display group          |
| -------------------------------------------------------- | ---------------------- |
| `article`                                                | Journal article / 期刊论文 |
| `inproceedings`, `conference`                            | Conference / 会议论文      |
| `patent`                                                 | Patent / 专利            |
| `bachelorthesis`, `mastersthesis`, `phdthesis`, `thesis` | Thesis / 学位论文          |

Other entry types remain available under their normalized original names.

## Citation templates

Common fields:

```text
{title} {venue} {journal} {volume} {number} {pages} {pages-pages}
{year} {doi} {citekey} {publisher} {school}
```

`{venue}` resolves to a suitable journal, proceedings, school, or publisher field.

### Author placeholders

```text
{authors}
{authors-family-first}
{authors-initials}
{authors-family-first-initials}
```

- `{authors}` renders `Given Family`.
- `{authors-family-first}` renders `Family, Given`.
- The `-initials` suffix abbreviates given names.
- **Every variant preserves the exact BibTeX author sequence.** It only changes how each individual name is displayed.

Legacy `order`, `form`, and `max` modifiers remain readable for saved-template compatibility but are not recommended for new templates.

### Page fields

- `{pages}` outputs only the starting page, such as `101`.
- `{pages-pages}` outputs the complete range, such as `101–112`.

Missing fields are omitted automatically. ExportMyPub also removes empty brackets, duplicate punctuation, and dangling separators. Legacy `[[...]]` blocks remain supported for saved templates.

### Lightweight rich text

- `*text*` — italic;
- `**text**` — bold.

Markdown, DOCX, and ODT preserve these styles. TXT strips the markers and exports plain text. The live preview reflects the currently selected format.

```text
{authors-family-first}. *{title}*. {venue}. {volume}(**{number}**): {pages-pages}, {year}.
```

Unknown placeholders and unbalanced rich-text markers are reported as validation errors.

## Export formats and numbering

- **TXT:** UTF-8 plain text without rich-text markers.
- **Markdown:** retains `*italic*` and `**bold**` syntax.
- **DOCX / ODT:** Times New Roman, 10 pt, with native bold and italic runs.

Automatic numbering can be disabled or formatted as either `1.` or `[1]`. DOCX and ODT calculate a hanging indent from the longest actual prefix so wrapped lines align with citation text.

The current visible list is exported in its current order. Optional headings, automatic numbering, and representative-work markers are configured in the export panel.

## GH-ScholarBot integration

ExportMyPub **does not scrape Google Scholar**. Users who want citation metrics must deploy [jiaye-wu/GH-ScholarBot](https://github.com/jiaye-wu/GH-ScholarBot/) themselves and provide a GitHub repository URL, JSON base-directory URL, or complete `gs_data.json` URL.

ScholarBot can enrich the dashboard with an avatar, affiliation, interests, total and five-year citations, h-index, i10-index, citations by year, and publication-level citation counts.

Association follows this strict order:

1. exact `google_scholar_id` match;
2. a unique exact match on normalized title plus year;
3. no automatic fuzzy matching.

ScholarBot failures never disable BibTeX filtering or export.

## Parser and safety limits

ExportMyPub uses the dependency-free state-machine parser in `src/core/bibtexParser.ts` and does not execute BibTeX content. Supported constructs include ordinary entries, `@string`, `@comment`, `@preamble`, nested braces, quoted values, month macros, and `#` concatenation.

Defensive limits include:

- maximum input size: 10 MiB;
- maximum records: 10,000;
- maximum fields per record: 500;
- maximum brace nesting: 128 levels;
- malformed or unclosed input produces an explicit error rather than being executed or silently repaired.

## Dependency supply-chain policy

- `package.json` pins exact versions.
- `pnpm-lock.yaml` records npm SHA-512 integrity values.
- `.npmrc` disables dependency lifecycle scripts and verifies store integrity.
- `pnpm-workspace.yaml` keeps `onlyBuiltDependencies` empty.
- Newly published versions must age for at least 24 hours before automatic selection.
- `pnpm audit:prod` checks production dependencies for known vulnerabilities.
- Package additions and upgrades must be checked against the official repository, maintainers, publication history, and lockfile diff.
- The development server remains bound to `127.0.0.1` unless the security model is deliberately changed.

## Architecture

- React 19, TypeScript, and Vite;
- local dependency-free BibTeX parser;
- dnd-kit for accessible reordering;
- IndexedDB through `idb`;
- vite-plugin-pwa and Workbox;
- project-owned DOCX/ODT ZIP/XML generation;
- MiSans Variable Font and a Fluent/Mica-inspired interface.

Core behavior lives in `src/core/`; reusable UI components live in `src/components/`.

## Project information

- Version: `1.0.2606.23`
- License: GPLv3
- Author: Jiaye Wu
- Repository: [jiaye-wu/ExportMyPub](https://github.com/jiaye-wu/ExportMyPub)

## Font

The interface uses MiSans Variable Font in WOFF2/WOFF formats with `font-display: swap`. Confirm the font's redistribution terms before publishing a hosted or redistributed build.
