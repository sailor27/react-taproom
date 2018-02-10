import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){

  const kegRows= {
    display: 'flex',
    border: '2px solid black',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '110px',
    marginBottom: '14px',
    padding: '0px 12px',
    width: '73%'
  };

  return(
    <div style={kegRows}>
      <div className="prop">
        <p>{props.name}</p>
      </div>
      <div className="prop">
        <p>{props.brewer}</p>
      </div>
      <div className="prop">
        <p>{props.description}</p>
      </div>
      <div className="prop">
        <p>{props.abv}</p>
      </div>
      <div className="prop">
        <p>${props.price}</p>
      </div>
      <div className="prop">
        <p>{props.remaining}</p>
      </div>
      <div className="pour">
        <button>Pour</button>
      </div>
      <style jsx>{`
          .prop {
            color: var(--navy);
            border: 1px solid var(--navy);
            width: 170px;
            height: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
          }
          .pour {
            width: 170px;
            height: 75px;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 8px;
          }

          button{
            width: 100px;
            height: 60px;
            border: 3px solid black;
            border-radius: 25px;
            font-size: 1em;
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
