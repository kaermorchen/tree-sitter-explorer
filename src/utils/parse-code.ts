import type Parser from 'web-tree-sitter';

let parser: Parser;
// @ts-ignore
const TreeSitter = window.TreeSitter;

export async function parseCode(
  code: string,
  wasmUrl: string
): Promise<Parser.Tree> {
  if (!parser) {
    await TreeSitter.init();
    parser = new TreeSitter();
  }

  parser.setLanguage(await TreeSitter.Language.load(wasmUrl));

  return parser.parse(code);
}
