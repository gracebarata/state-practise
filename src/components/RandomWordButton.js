import React, { useState } from "react";

const randomColor = ["blue", "green", "yellow", "purple", "grey", "pink"];

function RandomWordButton() {
  const [picker, setPicker] = useState(0);
  // function generateRandomWord() {
  //   let randomColorPicker = randomColors.map(
  //     item => `you have picked the colour ${item}`
  //   );
  //   console.log(randomColorPicker);
  //   //return randomColorPicker;
  // }
  function handleClick() {
    const randomNumber = Math.floor(Math.random() * randomColor.length);
    setPicker(randomNumber);
  }
  return (
    <div>
      <button onClick={handleClick}>Generate Word</button>
      <h1>{randomColor[picker]}</h1>
    </div>
  );
}

export default RandomWordButton;
