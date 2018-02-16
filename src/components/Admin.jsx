import React from 'react';
import NewKegForm from './NewKegForm';

function Admin() {
  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  };
  return(
    <div style={adminStyle}>
      <h1>Add a New Keg</h1>
      <NewKegForm/>

    </div>
  );

}



export default Admin;
