import React from 'react';
import KegList from './KegList';
import Header from './Header';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import squigs from '../assets/images/152.jpg';

function App(){
  var appStyle = {

    margin: '0px',
    background: `#FFAAFA url(${squigs}) no-repeat fixed center`,
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
      `}</style>
      <Header/>

      <Switch>
        <Route exact path='/' component={ KegList } />
        <Route path='/newkeg' component={ NewKegForm } />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}

export default App;
