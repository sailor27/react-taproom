import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from  './KegList';
import PropTypes from 'prop-types';

function Admin(props) {
  console.log(props.kegList);
  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  };
  return(
    <div style={adminStyle}>
      <h1>Add a New Keg</h1>
      <NewKegForm/>
      <KegList kegList={props.kegList}/>

    </div>
  );

}

Admin.propTypes = {
  kegList: PropTypes.object
};


export default Admin;
