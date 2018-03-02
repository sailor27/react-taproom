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
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  function handleEditKegForm(event) {
    event.preventDefault();
    console.log('form submit handler fire');
    props.onEditKeg({name: _name.value, brewer: _brewer.value, description: _description.value, abv: _abv.value, price: _price.value, remaining: _remaining.value });
    _name.value = '';
    _brewer.value = '';
    _description.value = '';
    _abv.value = '';
    _price.value = '';
    _remaining.value = '';
  }

  return(
    <div>
      <form onSubmit={handleEditKegForm}style={formStyle}>
        <h1>Edit {props.selectedKeg.name}</h1>
        <input
          type='text'
          id='name'
          placeholder= {props.selectedKeg.name}
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder={props.selectedKeg.brewer}
          ref={(input) => {_brewer = input;}}/>
        <textarea
          id='Description'
          placeholder={props.selectedKeg.description}
          ref={(input) => {_description = input;}}/>
        <div className="smaller">
          <input
            type='text'
            id='abv'
            placeholder={props.selectedKeg.abv}
            ref={(input) => {_abv = input;}}/>
          <input
            type='text'
            id='price'
            placeholder={props.selectedKeg.price}
            ref={(input) => {_price = input;}}/>
          <input
            type='text'
            id='remaining'
            placeholder={props.selectedKeg.remaining}
            ref={(input) => {_remaining = input;}}/>
        </div>
        <button type='submit'>Change</button>
      </form>
      <style jsx>{`
          form{
            border: 3px solid var(--blueblack);
            display: flex;
            flexFlow: column nowrap;
            justifyContent: space-between;
            alignItems: center;
            background-color: var(--peach);
            border-radius: 15px;
            padding: 10px;
          }
          input, textarea{
            font-size: 1.25em;
            text-align: center;
            color: var(--darkblue);
            width: 80%;
            border-radius: 15px;
            border: 3px solid var(--blueblack);
            background-color: var(--light-peach);
          }
          input::placeholder, textarea::placeholder{
            color: var(--periwink);
          }
          button {
            font-size: 1.25em;
            display:flex;
            justify-content: center;
            padding: 10px;
            background-color: var(--light-peach);
            width: 90px;
            border: 3px solid var(--blueblack);
            border-radius: 15px;
          }

          .smaller {
            width: 80%;
            display: flex;
            justify-content: space-around;
          }

          .smaller input{
            width: 24%;
            text-align: center;
          }
          `}</style>
    </div>
  );
}

EditKegForm.propTypes = {
  selectedKeg:PropTypes.object,
  onEditKeg: PropTypes.func
};

export default EditKegForm;
