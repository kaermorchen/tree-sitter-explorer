import { useState } from 'react';
import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';
import ConsoleLineIcon from 'mdi-react/ConsoleLineIcon';

interface TreeNodeProps {
  node: SyntaxNode;
  fieldName: string | undefined;
  onClick: (startIndex: number, endIndex: number) => void;
}

function TreeNode({ node, fieldName, onClick }: TreeNodeProps) {
  const [childrenIsShown, setChildrenIsShown] = useState<boolean>(true);

  const cursor = node.walk();
  const children: Pick<TreeNodeProps, 'node' | 'fieldName'>[] = [];

  if (cursor.gotoFirstChild()) {
    do {
      children.push({
        fieldName: cursor.currentFieldName(),
        node: cursor.currentNode(),
      });
    } while (cursor.gotoNextSibling());
  }

  return (
    <div className="json-view--pair">
      <div className="flex items-center group">
        <span
          className={`json-view--${
            node.isNamed() ? 'property' : 'string'
          } cursor-pointer`}
          onClick={() => onClick(node.startIndex, node.endIndex)}
        >
          <span className="json-view--index">
            {fieldName ? `${fieldName}: ` : ''}
          </span>
          {node.isNamed() ? node.type : `"${node.text}"`}
        </span>

        {children.length > 0 && (
          <span
            className="cursor-pointer ml-1 text-sm select-none"
            onClick={() => setChildrenIsShown(!childrenIsShown)}
          >
            [{childrenIsShown ? '-' : '+'}]
          </span>
        )}

        <ConsoleLineIcon
          className="cursor-pointer ml-1 hidden group-hover:inline-block"
          onClick={() => console.log(node)}
          size={16}
        />
      </div>

      {children.length > 0 && childrenIsShown && (
        <div className="jv-indent">
          {children.map(({ node, fieldName }) => (
            <TreeNode
              node={node}
              key={node.id}
              fieldName={fieldName}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;
