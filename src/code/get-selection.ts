export interface INodePayload {
  id: string;
  name: string;
  characters: string;
  node: SceneNode
};

export type FilteringCallbackType = (node: INodePayload) => void;

export type FilteringFunctionType = (node: SceneNode, callback: FilteringCallbackType ) => void;

const selectedNodes: INodePayload[] = [];

export const getSelection = function getSelection(filteringFunction: FilteringFunctionType) {

  selectedNodes.splice(0, selectedNodes.length);

  const selectionNodes = figma.currentPage.selection;

  function traverse(node: SceneNode) {

    if (!('children' in node)) {
      return [];
    }

    for (let j = 0; j < node.children.length; j++) {
      filteringFunction(node.children[j], (node: INodePayload) => selectedNodes.push(node));
    }

    if (node.type !== 'COMPONENT' && node.type !== 'COMPONENT_SET') {
      for (const child of node.children) {
        if (child.type !== 'COMPONENT' && child.type !== 'COMPONENT_SET') {
          traverse(child);
        }
      }
    }

  }

  if (selectionNodes.length !== 0) {
    for (let i = 0; i < selectionNodes.length; i++) {
      traverse(selectionNodes[i]);
    }
  }

  return selectedNodes;
}

export const filterTextFields: FilteringFunctionType = function (node: SceneNode, callback: FilteringCallbackType) {
  if (node.type === 'TEXT') {

    callback({
      id: node.id,
      name: node.name,
      characters: node.characters,
      node: node
    });
  }
}
