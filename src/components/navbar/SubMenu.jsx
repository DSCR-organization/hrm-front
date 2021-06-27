import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function SubMenu({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
    <hr className="nav-hr"/>
      <li>
        <Link to={item.path} onClick={item.subNav && showSubnav}>
          {item.icon}
          {item.title}
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </Link>
        <ul>
          {subnav &&
            item.subNav.map((item, index) => {
              return (
                <Link to={item.path} key={index} className="drop-down" >
                  {item.icon}
                  {item.title}
                </Link>
              );
            })}
        </ul>
      </li>
    </>
  );
}

export default SubMenu;
