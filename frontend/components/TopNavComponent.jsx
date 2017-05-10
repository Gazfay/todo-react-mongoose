import React, { Component } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

const TopNavComponent = ({routerData}) => {

  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <a className="navbar-brand">Redux Todo</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className={classnames({'active': '/' == routerData.location.pathname})}>
              <Link to="/"> 
                Home
              </Link>
            </li>
            <li  className={classnames({'active': '/about' == routerData.location.pathname})}>
              <Link to="/about"> 
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )

}


export default TopNavComponent;
