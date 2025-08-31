import { useEffect, useRef, useState } from 'react';
import { parseCode } from '../utils/parse-code';
import type { IParser } from '../parsers';
import { useLoaderData } from 'react-router-dom';
import TreeView from './tree-view';
import { Node } from 'web-tree-sitter';
import CodeMirror from '@uiw/react-codemirror';
import type { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import InputCheckbox from './input-checkbox';

function Parser() {
  const { parser } = useLoaderData() as {
    parser: IParser;
  };
  const refs = useRef<ReactCodeMirrorRef>({});
  const [code, setCode] = useState(parser.initCode);
  const [cst, setCst] = useState<undefined | Node>();
  const [nodeNameIsShown, setNodeNameIsShown] = useState<boolean>(() => {
    const nodeNameIsShown = localStorage.getItem('nodeNameIsShown');

    return nodeNameIsShown ? JSON.parse(nodeNameIsShown) : true;
  });
  const [terminalSymbolsIsShown, setTerminalSymbolsIsShown] = useState<boolean>(
    () => {
      const terminalSymbolsIsShown = localStorage.getItem(
        'terminalSymbolsIsShown'
      );

      return terminalSymbolsIsShown ? JSON.parse(terminalSymbolsIsShown) : true;
    }
  );

  useEffect(() => {
    setCode(parser.initCode);
  }, [parser.initCode]);

  useEffect(() => {
    async function codeToCst(code: string) {
      const cst = await parseCode(code, parser.wasmUrl);

      setCst(cst?.rootNode);
    }

    codeToCst(code);
  }, [code, parser.wasmUrl]);

  useEffect(() => {
    localStorage.setItem('nodeNameIsShown', JSON.stringify(nodeNameIsShown));
  }, [nodeNameIsShown]);

  useEffect(() => {
    localStorage.setItem(
      'terminalSymbolsIsShown',
      JSON.stringify(terminalSymbolsIsShown)
    );
  }, [terminalSymbolsIsShown]);

  function treeNodeOnClickHandler(startIndex: number, endIndex: number): void {
    refs.current?.view?.dispatch({
      selection: { anchor: startIndex, head: endIndex },
    });
  }

  return (
    <div className="flex-1 flex items-stretch">
      <div className="flex-1 p-4 border-r-2 overflow-auto content-container">
        <CodeMirror value={code} onChange={setCode} ref={refs} />
      </div>

      <div className="flex-1 p-4 overflow-auto content-container">
        <div className="mb-2">
          <InputCheckbox
            label="Show node name"
            checked={nodeNameIsShown}
            onChange={setNodeNameIsShown}
          />
          <InputCheckbox
            label="Show terminal symbols"
            checked={terminalSymbolsIsShown}
            onChange={setTerminalSymbolsIsShown}
          />
        </div>

        {cst ? (
          <TreeView
            node={cst}
            onClick={treeNodeOnClickHandler}
            nodeNameIsShown={nodeNameIsShown}
            terminalSymbolsIsShown={terminalSymbolsIsShown}
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Parser;
