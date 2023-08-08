export interface IParser {
  id: string;
  name: string;
  wasmUrl: string;
  initCode: string;
}

export const parsers: IParser[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    wasmUrl:
      'https://unpkg.com/tree-sitter-javascript/tree-sitter-javascript.wasm',
    initCode: ['2 + 4;'].join('\n'),
  },
];
