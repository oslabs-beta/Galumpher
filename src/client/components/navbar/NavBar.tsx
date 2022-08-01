import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as RiIcons from 'react-icons/ri';

import GalumphingIcon from '../../images/galumphing-icon.png';
// import { fakeData } from './NavbarData.js';
import SubMenu from './SubMenu';

const NavbarData = [
  {
    title: 'Containers',
    path: '/containers',
    arrowClosed: <RiIcons.RiArrowUpSFill/>,
    arrowOpened: <RiIcons.RiArrowDownSFill />,
    
    subNav: [
      {
        title: 'Container 10',
        path: '/containers/container1',
      },
      {
        title: 'Container 2',
        path: '/containers/container2',
      },
      {
        title: 'Container 3',
        path: '/containers/container3',
      }
    ]
  },
  {
    title: 'Settings',
    path: '/settings'
  }
];


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