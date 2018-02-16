import React from 'react';
import KegList from './KegList';
import Header from './Header';
import Admin from './Admin';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import squigs from '../assets/images/1520.jpg';
/*eslint-disable *//*eslint-disable */
import { v4 } from 'uuid';


class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        masterKegList: {
          '015eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: 'Ruby Zozzle',
            brewer: 'Hi-Wheel',
            description: 'Sparkling Wine & Grapefruit',
            abv: '6.8%',
            price: '7',
            remaining: '20'
          },
          '115eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: 'Tart N Juicy',
            brewer: 'Epic',
            description: 'Sour IPA',
            abv: '4.5%',
            price: '6',
            remaining: '60'
          },
          '215eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: 'Hamm\'s',
            brewer: 'Miller/Coors',
            description: 'American Lager',
            abv: '4.7%',
            price: '3',
            remaining: '65'
          },
          '315eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: 'Prismatic',
            brewer: 'Ninkasi',
            description: 'Juicy IPA',
            abv: 	'5.9%',
            price: '6',
            remaining: '75'
          },
          '415eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: 'Juicy Haze',
            brewer: 'New Belgium',
            description: 'India Pale Ale',
            abv: 	'7.5%',
            price: '6',
            remaining: '18'
          },
          '515eec7c-e6ca-4d3c-9c0a-e24f336947b3': {
            name: '8 Hop',
            brewer: 'New Belgium',
            description: 'Pale Ale',
            abv: 	'5.5%',
            price: '6',
            remaining: '58'
          }
        },
        selectedKeg: null
      };
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }

  handleNewKeg(keg){
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: keg
    });
    this.setState({masterKegList: newMasterKegList});
    console.log(newMasterKegList);
  }

  handleKegSelection(kegId){
    this.setState({selectedKeg: kegId});
  }

  render(){
    var appStyle = {
      margin: '0px',
      background: `linear-gradient(
        rgba(255, 0, 0, 0.10),rgba(255, 0, 0, 0.10)), url(${squigs})`,
      backgroundSize: 'cover',
      height: '100vh',
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

            h1, h2, h3, h4{
              color: var(--darkblue);
            }

            a:hover{
              font-style: italic;
            }

            `}</style>
        <Header/>
        <Switch>
          <Route exact path='/'render={()=><KegList kegList={this.state.masterKegList} />} />
          <Route exact path='/admin' render={(props)=><Admin
              kegList={this.state.masterKegList}
              currentRouterPath={props.location.pathname}
              onNewKeg={this.handleNewKeg}
              onKegSelection={this.handleKegSelection}
              selectedKeg={this.state.selectedKeg}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
