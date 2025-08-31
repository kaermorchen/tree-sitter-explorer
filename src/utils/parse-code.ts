import { Parser, Language } from 'web-tree-sitter';

let parser: Parser;

export async function parseCode(code: string, wasmUrl: string) {
  if (!parser) {
    await Parser.init();
    parser = new Parser();
  }

  parser.setLanguage(await Language.load(wasmUrl));

  return parser.parse(code);
}
