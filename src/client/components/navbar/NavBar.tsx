import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import GalumphingIcon from '../../images/galumphing-icon.png';
import SubMenu from './SubMenu';

// const NavbarItems = styled.nav`
//   background: #15171c;
//   width: 200px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 83px;
// `;

// const NavbarWrap = styled.div`
//   width: 100%;
// `;

const NavBar = ({ navbarData, changeDisplay }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDropClick = () => {
    setIsClicked(!isClicked);
  }

  // return (
  //   <div className='navbar'>
  //     <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
  //     {/* <button className='containers-toggle'></button> */}
   
  //     <NavbarItems>
  //       <NavbarWrap>
  //         {
  //           navbarData.map((item, index) => {
  //             return <SubMenu item={item} key={index} />;
  //           })
  //         }
  //       </NavbarWrap>
  //     </NavbarItems>
  //   </div>
  // );
  console.log(navbarData)

  return (
    <div className='navbar'>
      <img className='icon' src={GalumphingIcon} alt="Galumphing icon" />
      <div className='navbarItems'>
        <div className='containerDrop navbarItems' onClick={handleDropClick}>
          Containers
        </div>
        {isClicked ? navbarData.map((item, index) => {
          return <Link to='/containers' className='subItems' onClick={() => {
            changeDisplay(navbarData[index].title);
          }} key={index}>{item.title}</Link>;
        }) : null}
        <Link to='/settings' className='containerDrop'>Settings</Link>
      </div>
    </div>
  );
};

export default NavBar;