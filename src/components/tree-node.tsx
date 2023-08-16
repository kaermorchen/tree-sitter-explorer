import 'react18-json-view/src/style.css';
import { SyntaxNode } from 'web-tree-sitter';
import ConsoleLineIcon from 'mdi-react/ConsoleLineIcon';
import { action, computed, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';

interface TreeNodeProps {
  node: SyntaxNode;
  fieldName: string | undefined;
  onClick: (startIndex: number, endIndex: number) => void;
}

class TreeNodeState {
  childrenIsShown = true;
  node;

  constructor(node: TreeNodeProps['node']) {
    makeObservable(this, {
      childrenIsShown: observable,
      children: computed,
      toggleChildrenIsShown: action,
    });

    this.node = node;
  }

  toggleChildrenIsShown = () => {
    this.childrenIsShown = !this.childrenIsShown;
  };

  get children() {
    const cursor = this.node.walk();
    const children: Pick<TreeNodeProps, 'node' | 'fieldName'>[] = [];

    if (cursor.gotoFirstChild()) {
      do {
        children.push({
          fieldName: cursor.currentFieldName(),
          node: cursor.currentNode(),
        });
      } while (cursor.gotoNextSibling());
    }

    return children;
  }
}

const TreeNode = observer(({ node, fieldName, onClick }: TreeNodeProps) => {
  const [state] = useState(() => new TreeNodeState(node));

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

        {state.children.length > 0 && (
          <span
            className="cursor-pointer ml-1 text-sm select-none"
            onClick={state.toggleChildrenIsShown}
          >
            [{state.childrenIsShown ? '-' : '+'}]
          </span>
        )}

        <ConsoleLineIcon
          className="cursor-pointer ml-1 hidden group-hover:inline-block"
          onClick={() => console.log(node)}
          size={16}
        />
      </div>

      {state.children.length > 0 && state.childrenIsShown && (
        <div className="jv-indent">
          {state.children.map(({ node, fieldName }) => (
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
});

export default TreeNode;
