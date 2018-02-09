import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){


  return(
    <div>
      <p>{props.name}</p>
    </div>

    {/*}<div>
      <div>
        <h4>{props.name}</h4>
      </div>
      <div>
        <h4>{props.brewer}</h4>
      </div>
      <div>
        <h4>{props.description}</h4>
      </div>
      <div>
        <h4>{props.abv}</h4>
      </div>
      <div>
        <h4>{props.price}</h4>
      </div>
      <div>
        <h4>{props.remaining}</h4>
      </div>
    </div>*/}

  );
}



Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.number
};

export default Keg;
