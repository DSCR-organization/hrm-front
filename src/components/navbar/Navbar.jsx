import React from 'react'
import logo from "../../assets/img/hrm_image.png";
import { SidebarData } from "../../config/route/SidebarData";
import SubMenu from "./SubMenu";
import "./Navbar.css";

function Navbar({show}) {
  return (
    <>
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="Logo" className="logo" />
      <ul>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index}/>
        })}
      </ul>
    </div>
    </>
  );
}

export default Navbar;

