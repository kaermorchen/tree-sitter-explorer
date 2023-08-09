import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';

interface TreeNodeProps {
  node: SyntaxNode;
  onClick: (startIndex: number, endIndex: number) => void;
}

function TreeNode({ node, onClick }: TreeNodeProps) {
  return (
    <div className="json-view--pair">
      <span
        className={`json-view--${
          node.isNamed() ? 'property' : 'string'
        } cursor-pointer`}
        onClick={() => onClick(node.startIndex, node.endIndex)}
      >
        {node.isNamed() ? node.type : `"${node.text}"`}
      </span>

      {node.children.length > 0 && (
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
