import React from 'react';
import KegList from './KegList';
import Header from './Header';
import Admin from './Admin';
import NewKegForm from './NewKegForm';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import squigs from '../assets/images/1520.jpg';

function App(){
  var appStyle = {

    margin: '0px',
    background: `linear-gradient(
      rgba(255, 0, 0, 0.10),rgba(255, 0, 0, 0.10)), url(${squigs})`,
    backgroundSize: 'cover',
    height: '100vh',
    color: '#EB6EBD',
    fontFamily: 'Open Sans',
    fontSize: '18px',
    textAlign: 'center',
    boxSizing: 'border-box'
  };
  return (
    <div style={appStyle}>
      <style global jsx>{`
        :root {
          --bg-white: #0fd808;
          --light-peach: #ffe3ce;
          --peach: #ffbdb4;
          --periwink: #b0cbff;
          --darkblue: #5f6898;
          --lightblue: #e2edff;
          --navy: #606f92;
          --blueblack: rgb(19, 36, 115);
        }
        @import url('https://fonts.googleapis.com/css?family=Josefin+Slab:400,700i|Open+Sans+Condensed:300,700|Open+Sans:400,700');

        a {
         text-decoration: none;
         color: var(--blueblack);
        }

        a:hover{
          font-style: italic;
        }

      `}</style>
      <Header/>

      <Switch>
        <Route exact path='/' component={ KegList } />
        <Route path='/admin' component={ Admin } />
        <Route component={Error404} />
      </Switch>

    </div>
  );
}

export default App;
