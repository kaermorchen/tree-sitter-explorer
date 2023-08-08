import { useEffect, useState } from 'react';
// import JsonView from 'react18-json-view';
// import 'react18-json-view/src/style.css';
import { parseCode } from '../utils/parse-code';
import { IParser } from '../parsers';
import { useLoaderData } from 'react-router-dom';
// import { cstToJson } from '../utils/cst-to-json';
import TreeView from './tree-view';
import { SyntaxNode } from 'web-tree-sitter';

function Parser() {
  const { parser } = useLoaderData() as {
    parser: IParser;
  };
  // const [json, setJson] = useState<undefined | object>();
  const [code, setCode] = useState(parser.initCode);
  const [cst, setCst] = useState<undefined | SyntaxNode>();

  useEffect(() => {
    async function codeToCst(code: string) {
      const cst = await parseCode(code, parser.wasmUrl);

      setCst(cst.rootNode);
    }

    codeToCst(code);
  }, [code, parser.wasmUrl]);

  // useEffect(() => {
  //   setJson(cst ? cstToJson(cst) : undefined);
  // }, [cst]);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <textarea
        className="flex-1 border-r-1"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />
      <div className="flex-1">
        {/* {json ? <JsonView src={json} enableClipboard={false} /> : ''} */}
        {cst ? <TreeView node={cst} /> : ''}
      </div>
    </div>
  );
}

export default Parser;
