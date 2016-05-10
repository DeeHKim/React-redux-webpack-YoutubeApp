import React from 'react';
import Search from './Search.jsx'
let Nav = ({handleSearchInputChange}) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search/>
    </div>
  </nav>
);

export default Nav;
