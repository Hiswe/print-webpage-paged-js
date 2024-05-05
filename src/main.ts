import { createApp } from 'vue';

// UnoCSS Tailwind
import 'uno.css';
import '@unocss/reset/tailwind.css';

import App from './App.vue';

const app = createApp(App);

app.mount(`#app`);
