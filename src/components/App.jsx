import React from 'react';
import KegList from './KegList';

import { Switch, Route } from 'react-router-dom';

function App(){
  var appStyle = {
    margin: '0px',
    backgroundColor: '#FFFAFA',
    height: '100vh',
    color: '#EB6EBD',
    fontFamily: 'monospace',
    fontSize: '18px',
    textAlign: 'center',
    boxSizing: 'border-box'
  };
  return (
    <div style={appStyle}>
      <h1>App works</h1>
      <Switch>
        <Route exact path='/' component={ KegList } />
        {/*<Route path='/newkeg' component={} />*/}
      </Switch>

    </div>
  );
}

export default App;
