import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from  './KegList';
import PropTypes from 'prop-types';

function Admin(props) {
  console.log(props.selectedKeg);

  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  };
  return(
    <div style={adminStyle}>

      <NewKegForm onNewKeg={props.onNewKeg}/>
      <KegList
        kegList={props.kegList}
        currentRouterPath={props.currentRouterPath}
        onKegSelection={props.onKegSelection}/>
    </div>
  );

}

Admin.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  onNewKeg: PropTypes.func,
  onKegSelection: PropTypes.func.isRequired,
  selectedKeg: PropTypes.string
};


export default Admin;
