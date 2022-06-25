import React from "react";

const Button = ({ children, style }) => {
  return (
    <button className="button" style={style}>
      {children}
    </button>
  );
};

export default Button;
