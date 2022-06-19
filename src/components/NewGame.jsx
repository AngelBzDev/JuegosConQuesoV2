import React from "react";

const NewGame = ({ image, name }) => {
  return (
    <div className="new__games--card">
      <img src={image} alt={name} className="new__games--image" />
    </div>
  );
};

export default NewGame;
