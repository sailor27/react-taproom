import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from  './KegList';
import PropTypes from 'prop-types';
import EditKegForm from './EditKegForm';
function Admin(props) {
  console.log(props.selectedKeg);

  var adminStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center'
  };
  let optionalContent = null;
  if (props.selectedKeg != null) {
    optionalContent = <EditKegForm selectedKeg={props.kegList[props.selectedKeg]}/>;
  }
  return(
    <div style={adminStyle}>
      <div style={{display:'flex',justifyContent:'space-around', width:'100%',marginBottom:'40px'}}>
        <NewKegForm onNewKeg={props.onNewKeg}/>
        {optionalContent}
      </div>
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
