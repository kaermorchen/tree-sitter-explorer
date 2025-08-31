import { Node } from 'web-tree-sitter';
import ConsoleLineIcon from 'mdi-react/ConsoleLineIcon';
import { action, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component, type ReactNode } from 'react';

interface TreeNodeProps {
  node: Node;
  fieldName: string | undefined | null;
  onClick: (startIndex: number, endIndex: number) => void;
  nodeNameIsShown: boolean;
  terminalSymbolsIsShown: boolean;
}

@observer
export default class TreeNode extends Component<TreeNodeProps> {
  @observable accessor childrenIsShown = true;

  constructor(props: TreeNodeProps) {
    super(props);
    makeObservable(this);
  }

  get childrenNodes() {
    const cursor = this.props.node.walk();
    const children: Pick<TreeNodeProps, 'node' | 'fieldName'>[] = [];

    if (cursor.gotoFirstChild()) {
      do {
        children.push({
          fieldName: cursor.currentFieldName,
          node: cursor.currentNode,
        });
      } while (cursor.gotoNextSibling());
    }

    return children;
  }

  get isNamed() {
    return this.props.node.isNamed;
  }

  get viewClass() {
    return `json-view--${this.props.node.isNamed ? 'property' : 'string'}`;
  }

  get nodeNameElement(): ReactNode {
    if (this.props.nodeNameIsShown === false) {
      return null;
    } else if (typeof this.props.fieldName === 'string') {
      return <span className="json-view--index">{this.props.fieldName}: </span>;
    }

    return null;
  }

  get nodeType(): string | null {
    if (this.isNamed) {
      return this.props.node.type;
    } else if (this.props.terminalSymbolsIsShown !== false) {
      return `"${this.props.node.text}"`;
    }

    return null;
  }

  @action
  toggleChildrenIsShown = () => {
    this.childrenIsShown = !this.childrenIsShown;
  };

  handleClick = () => {
    this.props.onClick(this.props.node.startIndex, this.props.node.endIndex);
  };

  logNode = () => {
    console.log(this.props.node);
  };

  render() {
    return (
      <div className="json-view--pair">
        <div className="flex items-center group">
          <span
            className={`${this.viewClass} cursor-pointer`}
            onClick={this.handleClick}
          >
            {this.nodeNameElement}
            {this.nodeType}
          </span>

          {this.childrenNodes.length > 0 && (
            <span
              className="cursor-pointer ml-1 text-sm select-none"
              onClick={this.toggleChildrenIsShown}
            >
              [{this.childrenIsShown ? '-' : '+'}]
            </span>
          )}

          <ConsoleLineIcon
            className="cursor-pointer ml-1 hidden group-hover:inline-block"
            onClick={this.logNode}
            size={16}
          />
        </div>

        {this.childrenNodes.length > 0 && this.childrenIsShown && (
          <div className="jv-indent">
            {this.childrenNodes.map(({ node, fieldName }) => (
              <TreeNode
                node={node}
                key={node.id}
                fieldName={fieldName}
                onClick={this.props.onClick}
                nodeNameIsShown={this.props.nodeNameIsShown}
                terminalSymbolsIsShown={this.props.terminalSymbolsIsShown}
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}
