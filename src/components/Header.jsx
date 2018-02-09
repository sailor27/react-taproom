import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return(
    <div>
      <h1>TAP ROOM</h1>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/newkeg">Add Keg</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
