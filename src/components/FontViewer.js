import React, { useState } from "react";
import "./FontViewer.css";

// Make a function that displays an input box and displays the input text below it in different fonts
function FontViewer() {
  const [inputText, setInputText] = useState(""); // set the initial input as a string("")
  function handleChange(event) {
    const value = event.target.value; // setInputText(event.target.value);
    if (value.length > 10) {
      setInputText(value.slice(-10)); // means it will only dislplay 10 characters
      return;
    }
    setInputText(value);
  }
  return (
    <div>
      <input value={inputText} onChange={handleChange} />
      <ol>
        <li>{inputText}</li>
        <li>{inputText}</li>
        <li>{inputText}</li>
        <li>{inputText}</li>
      </ol>
    </div>
  );
}

export default FontViewer;
