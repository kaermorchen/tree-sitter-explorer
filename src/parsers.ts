import packageJson from '../package.json';

export interface IParser {
  id: string;
  name: string;
  wasmUrl: string;
  initCode: string;
  version: string;
  homepage: string;
}

export const parsers: IParser[] = [
  {
    id: 'tree-sitter-javascript',
    name: 'JavaScript',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-javascript.wasm`,
    version: packageJson.dependencies['tree-sitter-javascript'],
    initCode: ['2 + 4;'].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-javascript',
  },
  {
    id: 'tree-sitter-twig',
    name: 'Twig',
    wasmUrl: 'https://unpkg.com/tree-sitter-twig@0.4.0/tree-sitter-twig.wasm',
    version: '0.4.0',
    initCode: ['{{ var }}'].join('\n'),
    homepage: 'https://github.com/kaermorchen/tree-sitter-twig',
  },
  {
    id: 'tree-sitter-php',
    name: 'PHP',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-php.wasm`,
    version: packageJson.dependencies['tree-sitter-php'],
    initCode: ['hello'].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-php',
  },
  {
    id: 'tree-sitter-scala',
    name: 'Scala',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-scala.wasm`,
    version: packageJson.dependencies['tree-sitter-scala'],
    initCode: ['hello'].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-scala',
  },
];
