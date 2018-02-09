import React from 'react';


import { Switch, Route } from 'react-router-dom';

function App(){
  var appStyle = {
    backgroundColor: '#FFFAFA',
    color: '#EB6EBD',
    fontFamily: 'sans-serif',
    fontSize: '18px',
    textAlign: 'center',
    boxSizing: 'border-box'
  };
  return (
    <div style={appStyle}>
      <h1>App works</h1>
      <Switch>
        {/*<Route exact path='/' component={ App } />
        <Route path='/newkeg' component={} />*/}
      </Switch>

    </div>
  );
}

export default App;
