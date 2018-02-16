import React from 'react';
import PropTypes from 'prop-types';

function Keg(props){
  const kegRows= {
    display: 'flex',
    border: '3px solid rgb(19, 36, 115)',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    minHeight: '110px',
    marginBottom: '14px',
    padding: '0px 12px',

  };

  const adminKegs =
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
        <p>{props.remaining} left</p>
      </div>
      <div className="pour">
        <button>Pour</button>
      </div>
      <style jsx>{`
          .prop {
            color: var(--blueblack);
            border: 3px solid var(--blueblack);
            background-color: var(--light-peach);
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
    </div>;
  const menuKegs =
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
      <div className="pour">
        <button>Pour</button>
      </div>
      <style jsx>{`
          .prop {
            color: var(--blueblack);
            border: 3px solid var(--blueblack);
            background-color: var(--light-peach);
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
    </div>;

  if (props.currentRouterPath === '/admin') {
    return (
      <div style={{display:'flex', flexFlow:'column nowrap', justifyContent: 'center', width: '73%'}}>
        {adminKegs}
      </div>
    );
  } else {
    return(
      <div style={{display:'flex', flexFlow:'column nowrap', justifyContent: 'center', width: '73%'}}>
        {menuKegs}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string,
  brewer: PropTypes.string,
  description: PropTypes.string,
  abv: PropTypes.string,
  price: PropTypes.string,
  remaining: PropTypes.string,
  currentRouterPath: PropTypes.string,
  kegId: PropTypes.string.isRequired
};

export default Keg;
