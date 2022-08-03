import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';

import GalumphingIcon from '../../assets/galumphing-icon.png';

const NavBar = ({ navbarData, changeDisplay }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDropClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className='navbar'>
      <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
      <div className='navbarItems'>
        <div className='containerDrop navbarItems' onClick={handleDropClick}>
          <p>Containers</p><p className='arrow'>{isClicked ? '⌄' : '^'}</p>
        </div>
        {isClicked && navbarData.length  ? navbarData.map((item, index) => {
          return <div className='subItems' onClick={() => {
            changeDisplay(navbarData[index].name);
          }} key={index}>{item.name}</div>;
        }) : isClicked ? <div className='noContainers'>No containers running</div> : null}
        <Link to='/' className='containerDrop'>Settings</Link>
      </div>
    </div>
  );
};

export default NavBar;