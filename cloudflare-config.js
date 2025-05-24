// Configuration for Cloudflare Pages

module.exports = {
  // Specify build settings
  build: {
    command: "jekyll build",
    directory: "_site",
    environment: {
      JEKYLL_ENV: "production"
    }
  },
  
  // Configure headers for better performance
  headers: [
    {
      source: "/(.*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=3600"
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff"
        },
        {
          key: "X-Frame-Options",
          value: "DENY"
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block"
        }
      ]
    },
    {
      source: "/assets/(.*)\\.(?:jpg|jpeg|gif|png|svg|webp)$",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=604800"
        }
      ]
    },
    {
      source: "/assets/(.*)\\.(?:js|css)$",
      headers: [
        {
          key: "Cache-Control",
          value: "public, max-age=86400"
        }
      ]
    }
  ],
  
  // Redirects
  redirects: [
    {
      source: "/home",
      destination: "/",
      statusCode: 301
    }
  ],
  
  // Configure routes with custom handling
  routes: [
    {
      pattern: "/api/*",
      script: "api/index.js"
    }
  ]
};