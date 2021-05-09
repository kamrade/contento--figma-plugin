import * as React from 'react';
import { useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import './style/ui.css';

import { codeMessages } from './code/code-messages';
import { uiMessages } from './ui/ui-messages';
import { INodePayload } from './code/get-selection';

const App = function() {

  const [selection, setSelection] = useState<INodePayload[]>([]);

  useEffect(() => {
    console.log(':: Contento started v. 0.1.0');
    
    onmessage = (event) => {
      switch (event.data.pluginMessage.type) {
        case codeMessages.SET_SELECTION:
          setSelection(event.data.pluginMessage.selection);
          break;
        default:
          return;
      }
    }

  }, []);

  const clearNode = function (i: number) {
    console.log(`Clear ${i} text node`);
    parent.postMessage({ pluginMessage: { type: uiMessages.CLEAR_TEXT, index: i }}, '*')
  }
  
  return (<div className={`nodes-list`}>

    { selection.map((node: INodePayload, i: number) => {
      return (
        <div className={`text-node`} key={i} onClick={ () => clearNode(i) }>
          {node.characters}
        </div>
      );
    })}
  
  </div>);
  
}

ReactDOM.render(<App />, document.getElementById('react-page'));
