import React from 'react';
import logo from './assets/logo.svg';

let Header = function statelessFunctionComponentClass() {
  return (
    <div className="cs-topLevelNav-container flex flex-align-center flex-justify-between grid__col grid__col--12-of-12">
      <div className="cs-left-offset flex-align-center flex-inline grid__col grid__col--1-of-3">
        <img src={logo} className="cs-topLevelNav-logo-pushRight" />
        <p className="text-capitalize cs-topLevelNav-text">thought at work</p>
      </div>
      <div className="cs-right-offset flex-inline">
        <p className="cs-topLevelNav-text">14’ / 15’ / 16’ / 17’</p>
      </div>
    </div>
  );
};

export default Header;