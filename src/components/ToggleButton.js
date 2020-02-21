import React from "react";

function ToggleButton({ isOn, handleClick }) {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: isOn ? "green" : "grey" //css properties are camelCased, no dashes.
      }}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  );
}

export default ToggleButton;
