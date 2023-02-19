import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import lightningcss from 'vite-plugin-lightningcss';

export default defineConfig({
  server: {
    https: true,
    proxy: {
      "/api": {
        target: 'http://localhost:3000/',
        changeOrigin: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [
    mkcert({
      savePath: './.cert',
      mkcertPath: '/opt/homebrew/bin/mkcert',
    }),
    lightningcss({
      browserslist: ">= 0.25%",
      drafts: {
        nesting: true,
      }
    })
  ],
});
