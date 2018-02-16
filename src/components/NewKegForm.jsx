import React from 'react';

function NewKegForm(){

  var formStyle = {
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '500px',
    height: '200px',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  return (
    <div >
      <form style={formStyle} >
        <input
          type='text'
          id='name'
          placeholder='Keg Name'/>
        <input
          type='text'
          id='brewer'
          placeholder='Brewery'/>
        <textarea
          id='Description'
          placeholder='ex: Sparkling Wine with Grapefruit'/>
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
            width: 80%;
            border-radius: 15px;
            border: 3px solid var(--blueblack);
            background-color: var(--light-peach);
          }

          button {
            font-size: 1.25em;
            padding: 5px;
            background-color: var(--light-peach);
            width: 90px;
            border: 3px solid var(--blueblack);
            border-radius: 15px;
          }
          `}</style>
    </div>
  );
}

export default NewKegForm;
