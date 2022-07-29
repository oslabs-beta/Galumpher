import React from 'react';
import * as RiIcons from 'react-icons/ri';


export const NavbarData = [
  {
    arrowClosed: <RiIcons.RiArrowUpSFill/>,
    arrowOpened: <RiIcons.RiArrowDownSFill />,
    title: 'Containers',
    path: '/containers',
    
    
    subNav: [
      {
        title: 'Container 1',
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