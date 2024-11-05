const { libraryCompiler } = require('@rockpack/compiler');

libraryCompiler({
  cjs: {
    dist: './lib/cjs',
    src: './src',
  },
  esm: {
    dist: './lib/esm',
    src: './src',
  },
  name: 'FriendlyDI',
});