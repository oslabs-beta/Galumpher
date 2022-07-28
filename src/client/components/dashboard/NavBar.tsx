import React from 'react';
import GalumphingIcon from '../../images/galumphing-icon.png';

const NavBar = () => {

  return (
    <div className='navbar'>
      {/* <h3 className='menu'>Menu</h3> */}
      <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
      <button className='containers-btn'>Containers</button>
    </div>
  );
};

export default NavBar;