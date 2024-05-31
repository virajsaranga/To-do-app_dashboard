import React from "react";
import "../styles/SubHeader.css";
import closeIcon from "../assets/close.png";
const SubHeader = () => {
  return (
    <header className="sub-header">
      <div className="sub-header-content">
        <h2 className="welcome">Welcome back, John Doe</h2>
        <span className="main-text">
          The end of the year is coming. Are you planning your performance
          interviews? You can do this super efficiently with Acmy.
        </span>
        <span className="second-text">Look here for more information</span>
      </div>

      <button className="close-button">
        <img src={closeIcon} alt="Close" />
      </button>
    </header>
  );
};

export default SubHeader;
