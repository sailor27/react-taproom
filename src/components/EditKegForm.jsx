import React from 'react';
import PropTypes from 'prop-types';

function EditKegForm(props){
  const formStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '500px',
    height: '380px',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  // let _name = null;
  // let _brewer = null;
  // let _description = null;
  // let _abv = null;
  // let _price = null;
  // let _remaining = null;

  return(
    <div style={formStyle}>
      <h3>SELECTED: </h3>
      <p>EDIT KEG FORM COMING SOON</p>
    </div>

  );

}

EditKegForm.propTypes = {

};

export default EditKegForm;
