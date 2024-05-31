
import React from 'react';
import '../styles/Header.css';
import profil_pic from '../assets/profile.png';
import bell_icon from '../assets/bell-icon.png';
import icon_down from '../assets/Icon.png'


const Header = () => {
  return (
    <header className="header">
      <h1 className='header-text'>Dashboard</h1>
      <div className="user-info">
        
        <i className="fa fa-bell"></i>
        <img src={bell_icon } alt="User" className="bell-image"/>
        <img src={profil_pic } alt="User" className="user-image"/>
        <img src={icon_down } alt="User" className="down-image"/>
      </div>
    </header>
  );
};

export default Header;
