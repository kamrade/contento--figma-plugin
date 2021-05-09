import { getSelection, filterTextFields } from './code/get-selection';
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

    case uiMessages.CLEAR_TEXT:
      const index = msg.index;
      let node = selection[index].node as TextNode;
      figma.loadFontAsync({ family: "Inter", style: "Medium" })
        .then(() => node.deleteCharacters(0, selection[index].characters.length));
      break;

    default:
      return;
  }
}