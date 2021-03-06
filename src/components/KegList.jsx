import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {


  const listStyle = {
    display: 'flex',
    width: '100%',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  };
  return (
    <div style={listStyle}>
      {Object.keys(props.kegList).map(function(key) {
        var keg = props.kegList[key];
        return <Keg name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          currentRouterPath={props.currentRouterPath}
          key={key}
          kegId={key}
          onKegSelection={props.onKegSelection}/>;
        })}
    </div>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default KegList;
