import { useEffect, useState } from 'react';
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import { parseCode } from '../utils/parse-code';
import { IParser } from '../parsers';
import { useLoaderData } from 'react-router-dom';
import { SyntaxNode } from 'web-tree-sitter';

function Parser() {
  const { parser } = useLoaderData() as {
    parser: IParser;
  };
  const [json, setJson] = useState<undefined | SyntaxNode>();
  const [code, setCode] = useState(parser.initCode);

  useEffect(() => {
    async function codeToCst(code: string) {
      const cst = await parseCode(code, parser.wasmUrl);

      setJson(cst.rootNode);
    }

    codeToCst(code);
  }, [code, parser.wasmUrl]);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <textarea
        className="flex-1 border-r-1"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />
      <div className="flex-1">
        <JsonView src={json} />
      </div>
    </div>
  );
}

export default Parser;
