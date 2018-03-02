import React from 'react';
import { Link } from 'react-router-dom';



function Header() {

  return(
    <div className="header">
      <h1><Link style={{fontFamily:'Josefin Slab', fontSize: '4.75em', color:'rgb(19, 36, 115)' }}to="/">TAP ROOM</Link></h1>
      <div>
        <ul className="nav">
          <li><Link to="/">Menu</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/admin">Admin</Link></li>

        </ul>
      </div>
      <style jsx>{`
          .header{
            display:flex;
            width: 100%;
            height: 460px;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            color: var(--navy);
          }
          .nav {
            background-color: white;
            list-style:none;
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 600px;
            height: 75px;
            border: 3px solid var(--blueblack);
          }
          `}
      </style>
    </div>
  );
}


export default Header;
