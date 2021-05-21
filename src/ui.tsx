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

  return (<div className={`nodes-list`}>

    <h2 className={`title`}>Text Fields</h2>

    { Object.keys(selection).map((id, i) => {
      return (
        <div className={`text-node`} key={i}>

          <input type="text" className="edit-form-text-name"
            value={selection[id].name}/>

          <input type="text" className="edit-form-text"
            value={selection[id].characters} onChange={(event) => {

              parent.postMessage({ pluginMessage: {
                type: uiMessages.UPDATE_TEXT,
                id,
                value: event.target.value
              } }, '*')

            }} />
          {/* {selection[id].characters} */}
        </div>
      );
    })}

  </div>);

}

ReactDOM.render(<App />, document.getElementById('react-page'));
