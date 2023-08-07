import { useState } from 'react';
import ReactJson from 'react-json-view'

const json = {
  type: 'Template',
  body: [
    {
      type: 'SetStatement',
      declarations: [
        {
          type: 'VariableDeclaration',
          name: {
            type: 'Identifier',
            name: 'greeting',
          },
          init: {
            type: 'StringLiteral',
            value: 'Hello World',
          },
        },
      ],
    },
    {
      type: 'Text',
      value: '\n\n',
    },
    {
      type: 'VariableStatement',
      value: {
        type: 'FilterExpression',
        expression: {
          type: 'Identifier',
          name: 'greeting',
        },
        filter: {
          type: 'Identifier',
          name: 'lower',
        },
      },
    },
    {
      type: 'Text',
      value: '\n\n',
    },
    {
      type: 'ForInStatement',
      body: [
        {
          type: 'Text',
          value: '\n  ',
        },
        {
          type: 'VariableStatement',
          value: {
            type: 'Identifier',
            name: 'i',
          },
        },
        {
          type: 'Text',
          value: ',\n',
        },
      ],
      variables: [
        {
          type: 'Identifier',
          name: 'i',
        },
      ],
      expression: {
        type: 'CallExpression',
        callee: {
          type: 'Identifier',
          name: 'range',
        },
        arguments: [
          {
            type: 'NamedArgument',
            key: {
              type: 'Identifier',
              name: 'low',
            },
            value: {
              type: 'NumericLiteral',
              value: 1,
            },
          },
          {
            type: 'NamedArgument',
            key: {
              type: 'Identifier',
              name: 'high',
            },
            value: {
              type: 'NumericLiteral',
              value: 10,
            },
          },
          {
            type: 'NamedArgument',
            key: {
              type: 'Identifier',
              name: 'step',
            },
            value: {
              type: 'NumericLiteral',
              value: 2,
            },
          },
        ],
      },
      alternate: null,
    },
  ],
};

function Parser() {
  const [code, setCode] = useState(`hello`);

  return (
    <div className="flex-1 flex items-stretch mt-4">
      <textarea
        className="flex-1 border-r-1"
        value={code}
        onChange={(e) => setCode(e.currentTarget.value)}
      />
      <div className="flex-1">
        <ReactJson  src={json} />
      </div>
    </div>
  );
}

export default Parser;
