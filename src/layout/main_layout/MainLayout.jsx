import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from "../../components/navbar/Navbar";
import Content from "../../components/content/Content";
import PropTypes from 'prop-types';
import "./MainLayout.css" 

function MainLayout ({children}){
    const [showNav, setShowNav] = useState(false);

  return (
    <>
    <Navbar show={showNav}/>
      <header className={showNav ? "header-toggle header" : "header"}>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
      </header>
      <Content show={showNav} content={children} /> 
    </>
  );
}
MainLayout.propTypes = {
  children: PropTypes.any,
};
export default MainLayout;
