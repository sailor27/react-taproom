import React from 'react';
import { Link } from 'react-router-dom';



function Header() {
  return(
    <div>
      <h1><Link to="/">TAP ROOM</Link></h1>
      <div>
        <ul>
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/newkeg">Add Keg</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
