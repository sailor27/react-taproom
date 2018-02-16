import React from 'react';
import PropTypes from 'prop-types';

function NewKegForm(props){
  const formStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '500px',
    height: '300px',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  let _name = null;
  let _brewer = null;
  let _description = null;
  let _abv = null;
  let _price = null;
  let _remaining = null;

  return (
    <div >
      <form style={formStyle} >
        <input
          type='text'
          id='name'
          placeholder='Keg Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewery'
          ref={(input) => {_brewer = input;}}/>
        <textarea
          id='Description'
          placeholder='ex: Sparkling Wine with Grapefruit'
          ref={(input) => {_description = input;}}/>
        <div className="smaller">
          <input
            type='text'
            id='abv'
            placeholder='ABV'
            ref={(input) => {_abv = input;}}/>
          <input
            type='text'
            id='price'
            placeholder='$'
            ref={(input) => {_price = input;}}/>
          <input
            type='text'
            id='remaining'
            placeholder='#'
            ref={(input) => {_remaining = input;}}/>
        </div>
        <button type='submit'>Add</button>
      </form>

      <style jsx>{`
          form{
            border: 3px solid var(--blueblack);
            display: flex;
            flexFlow: column nowrap;
            justifyContent: space-between;
            alignItems: center;
            background-color: var(--periwink);
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
            padding: 5px;
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

NewKegForm.propTypes = {
  onNewKeg: PropTypes.func
};

export default NewKegForm;
