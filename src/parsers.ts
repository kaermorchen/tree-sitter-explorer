import packageJson from '../package.json';

export interface IParser {
  id: string;
  name: string;
  wasmUrl: string;
  initCode: string;
  version: string;
}

export const parsers: IParser[] = [
  {
    id: 'tree-sitter-javascript',
    name: 'JavaScript',
    wasmUrl: '/parsers/tree-sitter-javascript.wasm',
    version: packageJson.dependencies['tree-sitter-javascript'],
    initCode: ['2 + 4;'].join('\n'),
  },
  {
    id: 'tree-sitter-twig',
    name: 'Twig',
    wasmUrl: 'https://unpkg.com/tree-sitter-twig@0.4.0/tree-sitter-twig.wasm',
    version: '0.4.0',
    initCode: ['{{ var }}'].join('\n'),
  },
  {
    id: 'tree-sitter-php',
    name: 'PHP',
    wasmUrl: '/parsers/tree-sitter-php.wasm',
    version: packageJson.dependencies['tree-sitter-php'],
    initCode: ['hello'].join('\n'),
  },
  {
    id: 'tree-sitter-scala',
    name: 'Scala',
    wasmUrl: '/parsers/tree-sitter-scala.wasm',
    version: packageJson.dependencies['tree-sitter-scala'],
    initCode: ['hello'].join('\n'),
  },
];
