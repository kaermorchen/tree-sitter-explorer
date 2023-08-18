import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';
import TreeNode from './tree-node';

interface TreeViewProps {
  node: SyntaxNode;
  onClick: (startIndex: number, endIndex: number) => void;
  nodeNameIsShown: boolean;
}

function TreeView({ node, onClick, nodeNameIsShown }: TreeViewProps) {
  return (
    <code className="json-view">
      <TreeNode
        node={node}
        onClick={onClick}
        fieldName={undefined}
        nodeNameIsShown={nodeNameIsShown}
      />
    </code>
  );
}

export default TreeView;
