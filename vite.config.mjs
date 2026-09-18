import { defineConfig } from 'vite';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  plugins: [cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/ripples.js',
      formats: ['iife'],
      name: 'RippleEffect',
      fileName: () => 'ripples.js',
    },
  },
});
