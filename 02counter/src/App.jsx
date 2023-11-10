import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  //let counter = 15;
  const addValue = () => {
    //console.log("value added", counter);
    //counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>remove value{counter}</button>
      <br></br>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;

//assignment:never go less than 0 or above 20
//question of video 8
//setCounter(prevcounter=>prevcounter+1)
//setCounter(prevcounter=>prevcounter+1)
//setCounter(prevcounter=>prevcounter+1)
//setCounter(prevcounter=>prevcounter+1)
//incresed by 4
