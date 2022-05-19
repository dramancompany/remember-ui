import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import dotenv from 'dotenv';

dotenv.config();

process.env.BABEL_ENV = 'production';

// TODO: 환경 변수 파일
const outputData = [
  {
    file: `${process.env.DIRECTORY}/dist/index.js`,
    format: 'es',
  },
  {
    file: `${process.env.DIRECTORY}/dist/index.cjm.js`,
    format: 'cjs',
  },
];

const plugins = [
  peerDepsExternal(),
  image(),
  postcss(),
  babel({
    exclude: 'node_modules/**',
    runtimeHelpers: true,
  }),
  commonjs(),
  resolve(),
];

/**
 * External Dependencies
 */
const dependencies = [
  '@tippy.js/react',
  'react-toastify',
  'react-outside-click-handler',
  'react-text-mask',
  'body-scroll-lock',
  'react-modal',
];

export default outputData.map(({ file, format }) => ({
  input: 'src/index.ts',
  plugins,
  output: {
    file: file,
    format: format,
  },
  external: dependencies,
}));
