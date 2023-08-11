# Tree-sitter Explorer

This app is a playground for tree-sitter parsers. It uses `wasm` builds of the parsers.

## How to add new parser

1. Install new parser via `npm` with `--save-exact` flag, for example:

```bash
npm install tree-sitter-yourparser --save-exact
```

2. Add new `build-wasm` npm command:

```
"build-wasm:yourparser": "npm run build-wasm-boilerplate -- ../../node_modules/tree-sitter-yourparser",
```

3. Run it command. It should add a new `wasm` file in the `public/parsers` folder.

```bash
npm run build-wasm:yourparser
```

4. Add the parser to the `parsers` array in [parsers.ts](src/components/parser.tsx)
