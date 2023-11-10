import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 bg-white rounded-xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full"
            style={{ backgroundColor: "orange" }}
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
