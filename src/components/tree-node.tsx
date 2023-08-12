import { useState } from 'react';
import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';
import ConsoleLineIcon from 'mdi-react/ConsoleLineIcon';

interface TreeNodeProps {
  node: SyntaxNode;
  onClick: (startIndex: number, endIndex: number) => void;
}

function TreeNode({ node, onClick }: TreeNodeProps) {
  const [childrenIsShown, setChildrenIsShown] = useState<boolean>(true);

  return (
    <div className="json-view--pair">
      <div className="flex items-center group">
        <span
          className={`json-view--${
            node.isNamed() ? 'property' : 'string'
          } cursor-pointer`}
          onClick={() => onClick(node.startIndex, node.endIndex)}
        >
          {node.isNamed() ? node.type : `"${node.text}"`}
        </span>

        {node.children.length > 0 && (
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

      {node.children.length > 0 && childrenIsShown && (
        <div className="jv-indent">
          {node.children.map((node) => (
            <TreeNode node={node} key={node.id} onClick={onClick} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;
