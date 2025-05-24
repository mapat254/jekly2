# Modern Jekyll Blog for Cloudflare

A fast, responsive Jekyll blog template optimized for Cloudflare Pages deployment.

## Features

- Lightning-fast page loading with optimized assets
- Responsive design that works on all devices
- SEO-friendly structure with proper metadata
- Category and tag support with dedicated pages
- Dark mode toggle for user preference
- Image lazy loading for better performance
- Cloudflare-optimized deployment configuration

## Getting Started

### Prerequisites

- Ruby 3.0+
- Bundler
- Jekyll 4.3+

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   bundle install
   ```
3. Start the development server:
   ```
   bundle exec jekyll serve --livereload
   ```

## Deployment to Cloudflare Pages

1. Push your repository to GitHub, GitLab, or Bitbucket
2. Log in to the Cloudflare dashboard
3. Go to Pages > Create a project
4. Connect your repository and configure with these build settings:
   - Build command: `jekyll build`
   - Build output directory: `_site`
   - Environment variable: `JEKYLL_ENV=production`

## Directory Structure

```
├── _includes/          # Reusable components
├── _layouts/           # Page templates
├── _posts/             # Blog posts
├── assets/             # Static assets
│   ├── css/            # Stylesheets
│   ├── images/         # Images
│   └── js/             # JavaScript files
├── _config.yml         # Jekyll configuration
├── cloudflare-config.js # Cloudflare Pages configuration
├── Gemfile             # Ruby dependencies
└── index.html          # Homepage
```

## Creating Content

### Adding a new post

Create a new file in the `_posts` directory with the format `YYYY-MM-DD-title.md`:

```markdown
---
title: "Your Post Title"
description: A brief description of your post for SEO and excerpts
date: 2025-03-15
categories:
  - category-name
tags:
  - tag1
  - tag2
image: https://example.com/image.jpg
layout: post
---

Your post content goes here...
```

## Customization

- Edit `_config.yml` to update site settings
- Modify CSS in `assets/css/main.css`
- Update layouts in the `_layouts` directory
- Customize components in the `_includes` directory

## Performance Optimization

This template is optimized for performance with:

- CSS minification
- JavaScript minification
- Lazy-loaded images
- Optimized asset caching with Cloudflare
- Responsive images

## License

This project is open source and available under the [MIT License](LICENSE).