import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import GalumphingIcon from '../../images/galumphing-icon.png';
import { NavbarData } from './NavbarData.js';
import SubMenu from './SubMenu';

const NavbarItems = styled.nav`
  background: #15171c;
  width: 200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 83px;
`;

const NavbarWrap = styled.div`
  width: 100%;
`;

const NavBar = () => {

  return (
    <div className='navbar'>
      <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
      {/* <button className='containers-toggle'></button> */}
   
      <NavbarItems>
        <NavbarWrap>
          {
            NavbarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })
          }
        </NavbarWrap>
      </NavbarItems>
    </div>
  );
};

export default NavBar;