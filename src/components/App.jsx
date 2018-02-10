import React from 'react';
import KegList from './KegList';
import Header from './Header';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import squigs from '../assets/images/1520.jpg';

function App(){
  var appStyle = {

    margin: '0px',
    background: `#FFFAFA url(${squigs})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#EB6EBD',
    fontFamily: 'Open Sans',
    fontSize: '20px',
    textAlign: 'center',
    boxSizing: 'border-box'
  };
  return (
    <div style={appStyle}>
      <style global jsx>{`
        :root {
          --bg-white: #0fd808;
          --test-purple: magenta;
        }
        @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,700i|Open+Sans+Condensed:300,700|Open+Sans:400,700');

        a {
         text-decoration: none;
        }

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
