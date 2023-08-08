import { Point, SyntaxNode } from 'web-tree-sitter';

interface IJsonNode {
  id: number;
  type: string;
  text: string;
  startPosition: Point;
  endPosition: Point;
  startIndex: number;
  endIndex: number;
  childCount: number;
  namedChildCount: number;
  children: Array<IJsonNode>;
}

export function cstToJson(cst: SyntaxNode): IJsonNode {
  const obj: IJsonNode = {
    id: cst.id,
    type: cst.type,
    text: cst.text,
    startPosition: cst.startPosition,
    endPosition: cst.endPosition,
    startIndex: cst.startIndex,
    endIndex: cst.endIndex,
    childCount: cst.childCount,
    namedChildCount: cst.namedChildCount,
    children: [],
  };

  cst.children.forEach((item) => {
    obj.children.push(cstToJson(item));
  });

  return obj;
}
