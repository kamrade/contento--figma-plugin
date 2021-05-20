import { getSelection, filterTextFields, createNodeTransferObject } from './code/get-selection';
import { codeMessages } from './code/code-messages';
import { uiMessages } from './ui/ui-messages';

figma.showUI(__html__);
figma.ui.resize(375, 400);

let selection = getSelection(filterTextFields);

figma.ui.postMessage({ type: codeMessages.SET_SELECTION, selection });

figma.on('selectionchange', () => {
  selection = getSelection(filterTextFields);
  figma.ui.postMessage({ type: codeMessages.SET_SELECTION, selection });
});

figma.ui.onmessage = msg => {
  switch(msg.type) {

    case uiMessages.UPDATE_TEXT:
      const idEdit = msg.id;
      const value = msg.value;
      let nodeUpd = selection[idEdit].node as TextNode;
      figma.loadFontAsync({ family: "Inter", style: "Medium" })
        .then(() => {
          nodeUpd.deleteCharacters(0, nodeUpd.characters.length);
          nodeUpd.insertCharacters(0, value);
          selection[idEdit] = createNodeTransferObject(nodeUpd);
          figma.ui.postMessage({ type: codeMessages.SET_SELECTION, selection });
        });
      break;

    case uiMessages.CLEAR_TEXT:
      const id = msg.id;
      let node = selection[id].node as TextNode;
 
      figma.loadFontAsync({ family: "Inter", style: "Medium" })
        .then(() => {
          node.deleteCharacters(0, 1);
          selection[id] = createNodeTransferObject(node);
          figma.ui.postMessage({ type: codeMessages.SET_SELECTION, selection });
        });
      break;

    default:
      return;
  }
}