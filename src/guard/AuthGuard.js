import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

function AuthGuard({children}){
    /* localStorage.setItem("role","admin") */
    if(localStorage.getItem("role") !== "admin"){
        return <Redirect to="/login"/>
    }
    return children;
}
AuthGuard.propTypes = {
    children: PropTypes.any,
  };

export default AuthGuard;