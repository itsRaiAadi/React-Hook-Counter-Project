import { useState } from "react";

function App() {
  let [count, setCounter] = useState(0);

  let addValue = () => {
    setCounter(count + 1);
  };

  let removeValue = () => {
    setCounter(count - 1);
  };
  return (
    <div className="flex items-center justify-center gap-10 w-full h-screen m-0">
      <button
        className="p-2 border-2 rounded-[8px] bg-[#28a745] text-[#ffffff] cursor-pointer"
        onClick={addValue}
      >
        Add Value
      </button>
      <h2 className="text-4xl">{count}</h2>
      <button
        className="p-2 border-2 rounded-[8px] bg-[#dc3545] text-[#ffffff] cursor-pointer"
        onClick={removeValue}
      >
        Remove Value
      </button>
    </div>
  );
}

export default App;
