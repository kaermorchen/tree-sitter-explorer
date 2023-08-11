import { useEffect, useRef, useState } from 'react';
import { parseCode } from '../utils/parse-code';
import { IParser } from '../parsers';
import { useLoaderData } from 'react-router-dom';
import TreeView from './tree-view';
import { SyntaxNode } from 'web-tree-sitter';
import CodeMirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';

function Parser() {
  const { parser } = useLoaderData() as {
    parser: IParser;
  };
  const refs = useRef<ReactCodeMirrorRef>({});
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

  function treeNodeOnClickHandler(startIndex: number, endIndex: number): void {
    refs.current?.view?.dispatch({
      selection: { anchor: startIndex, head: endIndex },
    });
  }

  return (
    <div className="flex-1 flex items-stretch my-4">
      <div className="flex-1 px-4 border-r-2 overflow-auto content-container">
        <CodeMirror value={code} onChange={setCode} ref={refs} />
      </div>

      <div className="flex-1 px-4 overflow-auto content-container">
        {cst ? <TreeView node={cst} onClick={treeNodeOnClickHandler} /> : ''}
      </div>
    </div>
  );
}

export default Parser;
