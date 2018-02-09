import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const kegRows= {
    display: 'flex',
    border: '2px solid black',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '100px',
    width: '73%'
  };

  return(
    <div style={kegRows}>
      <div className="prop">
        <h4>{props.name}</h4>
      </div>
      <div className="prop">
        <h4>{props.brewer}</h4>
      </div>
      <div className="prop">
        <h4>{props.description}</h4>
      </div>
      <div className="prop">
        <h4>{props.abv}</h4>
      </div>
      <div className="prop">
        <h4>{props.price}</h4>
      </div>
      <div className="prop">
        <h4>{props.remaining}</h4>
      </div>
      <style jsx>{`
          .prop {
            border: 1px solid purple;
            width: 170px;
            height: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          `}
      </style>
    </div>


  );
}



Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string
};

export default Keg;
