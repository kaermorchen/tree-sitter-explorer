import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';

interface TreeNodeProps {
  node: SyntaxNode;
}

function TreeNode({ node }: TreeNodeProps) {
  return (
    <div className="json-view--pair">
      {node.isNamed() ? (
        <span className="json-view--property">{node.type}</span>
      ) : (
        <span className="json-view--string">"{node.text}"</span>
      )}
      {node.children.length > 0 && (
        <div className="jv-indent">
          {node.children.map((node) => (
            <TreeNode node={node} key={node.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TreeNode;
