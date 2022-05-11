import React from "react";

const SubTitle = ({ subtitle }) => {
  return (
    <div className="sub__title-container">
      <h3 className="sub__title">{subtitle}</h3>
      <a href="#" className="sub__link">
        Ver todo
      </a>
    </div>
  );
};

export default SubTitle;
