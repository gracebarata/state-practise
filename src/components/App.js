import React, { useState } from "react";
import ToggleButton from "./ToggleButton";
import FontViewer from "./FontViewer";
import RandomWordButton from "./RandomWordButton";

function App() {
  const [isOn, setIsOn] = useState(false);
  function handleClick() {
    // must be defined WITHIN another function eg ToggleButton / or App function, so that it can be 'seen' when the button is clicked
    setIsOn(!isOn); // rather than isOn(!isOn) which would mean we would have to manually toggle?
  }
  return (
    <div>
      <ToggleButton isOn={isOn} handleClick={handleClick} />
      {isOn && <FontViewer />}
      <RandomWordButton />
    </div>
  );
}
//^ if isOn is true, call FontViewer
export default App;

// task: create a random word generator. array of words -> displays a random word
