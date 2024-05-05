import { URL, fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import AutoImport from 'unplugin-auto-import/vite';
import Unocss from 'unocss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://www.npmjs.com/package/@vitejs/plugin-vue
    vue(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // custom resolvers
      resolvers: [
        // auto import icons
        // https://github.com/antfu/unplugin-icons
        IconsResolver({
          prefix: false,
          enabledCollections: [`print-icon`],
        }),
      ],
    },
    ),
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      imports: [
        `vue`,
      ],
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),

    // https://github.com/antfu/unplugin-icons
    Icons({
      customCollections: {
        'print-icon': FileSystemIconLoader(
          `./src/assets/icons`,
          svg => svg.replace(/^<svg /, `<svg fill="currentColor" `),
        ),
      },
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL(`./src`, import.meta.url)),
    },
  },
});
