import "./App.css";

import React, { useState } from "react";

function App() {
  console.log("app rendered");
  const [value, setValue] = useState({
    value: 0,
  });

  // const [value, setValue] = useState(1);
  //let multipliedValue = value * 5;
  // const multiply = () => {
  //  setValue(value + 1);}

  const clickMe = () => {
    //console.log("logged");
    //setValue(value + 1);
    //setValue(1);
    //setValue(3);
    setValue({
      value: 0,
    });
  };

  return (
    <>
      <h1>Main value:{value.value} </h1>
      <button onClick={clickMe}>Click to multiply by 5</button>
      {/* <h2>multiplied value:{multipliedValue} </h2>*/}
    </>
  );
}

export default App;
