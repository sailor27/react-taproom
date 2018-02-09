import React from 'react';
import KegList from './KegList';
import Header from './Header';
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
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Fredericka+the+Great|Josefin+Slab:400,700i');

        body{
          background-color: blue;
        }
      `}</style>

      <Header/>
      <h1>App works</h1>

      <Switch>
        <Route exact path='/' component={ KegList } />
        {/*  <Route path='/newkeg' component={} />*/}
      </Switch>

    </div>
  );
}

export default App;
