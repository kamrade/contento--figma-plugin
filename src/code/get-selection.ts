export interface INodePayload {
  id: string;
  name: string;
  characters: string;
  node: SceneNode
};

export interface INodeTransferObject {
  [name: string]: INodePayload;
};

export type FilteringCallbackType = (node: INodePayload) => void;

export type FilteringFunctionType = (node: SceneNode, callback: FilteringCallbackType ) => void;

let selectedNodes: INodeTransferObject = {};

export const getSelection = function getSelection(filteringFunction: FilteringFunctionType) {

  selectedNodes = {};

  const selection = figma.currentPage.selection;

  function traverse(node: SceneNode) {

    if (!('children' in node)) {
      if (node.type === 'TEXT') {
        filteringFunction(node, (node: INodePayload) => selectedNodes[node.id] = node);
      }
      return [];
    }

    for (let j = 0; j < node.children.length; j++) {
      filteringFunction(node.children[j], (node: INodePayload) => selectedNodes[node.id] = node);
    }

    if (node.type !== 'COMPONENT' && node.type !== 'COMPONENT_SET') {
      for (const child of node.children) {
        if (child.type !== 'COMPONENT' && child.type !== 'COMPONENT_SET') {
          traverse(child);
        }
      }
    }

  }

  if (selection.length !== 0) {
    for (let i = 0; i < selection.length; i++) {
      traverse(selection[i]);
    }
  }

  return selectedNodes;
}

export const filterTextFields: FilteringFunctionType = function (node: SceneNode, callback: FilteringCallbackType) {
  if (node.type === 'TEXT') {
    callback( createNodeTransferObject(node) );
  }
}

export const createNodeTransferObject = (node: TextNode) => ({
  id: node.id,
  name: node.name,
  characters: node.characters,
  node: node
});
