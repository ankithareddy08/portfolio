import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ankithareddy-portfolio.netlify.app',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  vite: {
    // Preserve the standalone animation-timeline syntax used by current browsers.
    build: { cssMinify: false },
  },
});
