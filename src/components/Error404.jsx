import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Error404(props){

  const errorStyle = {
    display: 'flex',
    height: '800px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div>
      <div>
        <div className="container">
          <div style={errorStyle}>
            <div>
              <h1> Oh No!</h1>
              <h1>There's nothing here.</h1>
              <h3>Would you like to return <Link to="/">home</Link> instead?</h3>
              <small> The page you requested at  {props.location.pathname} does not exist. </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Error404.propTypes = {
  location: PropTypes.object
};

export default Error404;
