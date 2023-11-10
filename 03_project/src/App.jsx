import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-2">
        tailwind test
      </h1>
      <Card username="Neha" btnText="learn more" />
      <Card username="sikta" btnText="click me" />
    </>
  );
}

export default App;
