import React from 'react';


const Header = ({ onReload }) => {
  return (
    <header className="header-container">
      <h1 className="header-title">Blood Donation Registration</h1>
      <button className="reload-button" onClick={onReload}>Reload</button>
    </header>
  );
};

export default Header;

