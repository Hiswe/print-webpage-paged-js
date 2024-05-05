import {
  defineConfig,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

// relative import is mandatory since it used in vite-config where alias are defined
// import { rules, theme } from './unocss.config-tailwind';

export default defineConfig({
  // rules,
  // theme,
  presets: [
    presetWind(),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
  content: {
    pipeline: {
      // https://unocss.dev/guide/extracting#extracting-from-build-tools-pipeline
      include: [
        /\.(vue|html)($|\?)/,
        // include storybook files
        /\.stories\.ts($|\?)/,
      ],
    },
  },
});
