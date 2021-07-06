import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function GuestGuard({children}){
     if(localStorage.getItem("role") === "super"){
          return <Redirect to="/app/"/>
  
    }
    console.log(children);
    return children;
}
GuestGuard.propTypes = {
    children: PropTypes.any,
  };

export default GuestGuard;