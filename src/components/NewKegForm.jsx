import React from 'react';

function NewKegForm(){
  return (
    <div>
      <form>
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
    </div>
  );
}

export default NewKegForm;
