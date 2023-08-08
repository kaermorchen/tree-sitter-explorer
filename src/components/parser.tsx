import { useEffect, useState } from 'react';
import { parseCode } from '../utils/parse-code';
import { IParser } from '../parsers';
import { useLoaderData } from 'react-router-dom';
import TreeView from './tree-view';
import { SyntaxNode } from 'web-tree-sitter';
import CodeMirror from '@uiw/react-codemirror';

function Parser() {
  const { parser } = useLoaderData() as {
    parser: IParser;
  };

  const [code, setCode] = useState(parser.initCode);
  const [cst, setCst] = useState<undefined | SyntaxNode>();

  useEffect(() => {
    setCode(parser.initCode);
  }, [parser.initCode]);

  useEffect(() => {
    async function codeToCst(code: string) {
      const cst = await parseCode(code, parser.wasmUrl);

      setCst(cst.rootNode);
    }

    codeToCst(code);
  }, [code, parser.wasmUrl]);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <div className="flex-1 p-4 border-r-2">
        <CodeMirror value={code} onChange={setCode} />
      </div>

      <div className="flex-1 p-4">{cst ? <TreeView node={cst} /> : ''}</div>
    </div>
  );
}

export default Parser;
