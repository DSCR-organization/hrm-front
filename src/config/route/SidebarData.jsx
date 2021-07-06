
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill className="open-close"/>,
    iconOpened: <RiIcons.RiArrowUpSFill className="open-close"/>,
  },
  {
    title: 'Employee Management',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill className="open-close"/>,
    iconOpened: <RiIcons.RiArrowUpSFill className="open-close"/>,

    subNav: [
      {
        title: 'HR Master Data',
        path: '/dashboard/home',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Hire an Employee',
        path: '/dashboard/reports/reports1',
        icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Seperate an Employee',
        path: '/dashboard/reports/reports2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Organization Structure',
        path: '/dashboard/reports/reports2',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Staff Cadre',
        path: '/dashboard/reports/reports2',
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Payroll Management',
    path: '/products',
    icon: <FaIcons.FaCartPlus />
  },
  {
    title: 'Leave & Attendance Management',
    path: '/team',
    icon: <IoIcons.IoMdPeople />
  },
  {
    title: 'Performance Management',
    path: '/messages',
    icon: <FaIcons.FaEnvelopeOpenText />,

    // iconClosed: <RiIcons.RiArrowDownSFill className="open-close"/>,
    // iconOpened: <RiIcons.RiArrowUpSFill className="open-close"/>,

    // subNav: [
    //   {
    //     title: 'Message 1',
    //     path: '/messages/message1',
    //     icon: <IoIcons.IoIosPaper />
    //   },
    //   {
    //     title: 'Message 2',
    //     path: '/messages/message2',
    //     icon: <IoIcons.IoIosPaper />
    //   }
    // ]
  },
  {
    title: 'Employee Portal',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Reports & Analysis Management',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  },
  {
    title: 'Role Managment',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />
  }
];