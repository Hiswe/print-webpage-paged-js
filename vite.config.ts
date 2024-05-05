import { URL, fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://www.npmjs.com/package/@vitejs/plugin-vue
    vue(),
    // https://github.com/antfu/unplugin-vue-components
    Components(),
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        `vue`,
      ],
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL(`./src`, import.meta.url)),
    },
  },
});
