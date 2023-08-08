import { useState } from 'react';
import JsonView from '@uiw/react-json-view';
import { parseCode } from '../utils/parse-code';

function Parser() {
  const initJson = parseCode(
    `2 + 4;`,
    'https://unpkg.com/tree-sitter-javascript/tree-sitter-javascript.wasm'
  );
  const [json, setJson] = useState(initJson);
  const [code, setCode] = useState(`2 + 4;`);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <textarea
        className="flex-1 border-r-1"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />
      <div className="flex-1">
        <JsonView value={json} />
      </div>
    </div>
  );
}

export default Parser;
