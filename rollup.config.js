import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';

import pkg from './package.json';

process.env.BABEL_ENV = 'production';

const outputData = [
  {
    file: pkg.main,
    format: 'cjs',
  },
  {
    file: pkg.module,
    format: 'es',
  },
];

const plugins = [
  peerDepsExternal(),
  image(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
  commonjs(),
  resolve(),
];

export default outputData.map(({ file, format }) => ({
  input: 'src/index.js',
  plugins,
  output: {
    file: file,
    format: format,
  },
}));
