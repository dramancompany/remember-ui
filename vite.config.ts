import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

export default () => {
  return defineConfig({
    plugins: [
      process.env.npm_lifecycle_event === 'build' ? null : react(),
      tsconfigPaths(),
      dts({
        insertTypesEntry: true,
      }),
      visualizer({
        filename: 'stats.html',
        open: false,
      }),
    ],
    build: {
      target: ['es2015'],
      polyfillModulePreload: false,
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'remember-ui',
        /** package.json과 파일 포멧을 맞춰야 한다
         * es -> package.json의 module과 동일 === dist/index.es.js
         * cjs -> package.json의 main 동일 === dist/index.cjs.js
         */
        formats: ['umd', 'es'],
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: [
          '@tippy.js/react',
          'tippy.js',
          'react-toastify',
          'react-outside-click-handler',
          'react-text-mask',
          'body-scroll-lock',
          'react-modal',
          'react',
          'react-dom',
          'styled-components',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'styled-components': 'styled',
          },
        },
      },
    },
  });
};
