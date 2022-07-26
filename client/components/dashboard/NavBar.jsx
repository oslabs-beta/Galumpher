import React from 'react';
import GalumphingIcon from '../../images/galumphing-icon.png';
import { Link } from 'react-router-dom';


const NavBar = () => {
//add onClick method to Container's button. 
//clicking on container button will link user to AddContainer page/component 
  return (
    <div className='navbar'>
      {/* <h3 className='menu'>Menu</h3> */}
      <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
      <Link to='/addcontainer'>
        <button className='containers-btn'>Containers</button>
      </Link>
    </div>
  );
};

export default NavBar;