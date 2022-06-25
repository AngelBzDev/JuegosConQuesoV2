import React from "react";

const Input = ({ children, placeholder, name }) => {
  return (
    <div className="input">
      <input type="text" placeholder={placeholder} name={name} />
      {children}
    </div>
  );
};

export default Input;
