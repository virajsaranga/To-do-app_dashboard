import React from 'react';
import '../styles/Sidebar.css';
import gallery from '../assets/gallery.png';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2 className='sidebar-header'>Acmey Solutions</h2>
      </div>
      <div className="sidebar-menu">
        <a href="/dashboard" className="sidebar-link">
          <img src={gallery} alt="User" className="user-image"/>
          <div className="sidebar-link-content">
            <i className="fa fa-dashboard"></i>
            <span>Dashboard</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
