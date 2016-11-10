import React from "react";
import { Link } from 'react-router';

export const AppContainer = ({ children }) => {
  return (
    <div className={'container'}>
      <ul>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/about/nested'}>About &raquo; Nested</Link></li>
      </ul>
      {children}
    </div>
  );
};

export default AppContainer;
