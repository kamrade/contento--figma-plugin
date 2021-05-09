import * as React from 'react';
import { useEffect } from 'react';
import * as ReactDOM from 'react-dom';

const App = function() {

  useEffect(() => {
    console.log(':: Contento started v. 0.1.0');
  }, []);
  
  return (<div>
    Test
  </div>);
  
}

ReactDOM.render(<App />, document.getElementById('react-page'));
