interface IParser {
  id: string;
  name: string;
  wasmUrl: string;
}

export const parsers: IParser[] = [
  {
    id: 'javascript',
    name: 'JavaScript',
    wasmUrl:
      'https://unpkg.com/tree-sitter-JavaScript/tree-sitter-javascript.wasm',
  },
];
