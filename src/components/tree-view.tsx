import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';
import TreeNode from './tree-node';

interface TreeViewProps {
  node: SyntaxNode
}

function TreeView({ node }: TreeViewProps) {
  return (
    <code className="json-view">
      <TreeNode node={node} />
    </code>
  );
}

export default TreeView;
