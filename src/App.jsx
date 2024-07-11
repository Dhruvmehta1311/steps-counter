import { useState } from "react";
import "./App.css";

function App() {
  return <Counter />;
}

function Counter() {
  const [counter, setCounter] = useState(0);
  const [steps, setSteps] = useState(0);

  function handleIncrement() {
    setCounter(counter + steps);
  }
  function handleDecrement() {
    if (counter === 0) return;
    setCounter(counter - steps);
  }
  function handleIncrementSteps() {
    setSteps(steps + 1);
  }
  function handleDecrementSteps() {
    if (counter === 0) return;
    setSteps(steps - 1);
  }

  return (
    <div className="bg-purple-400 h-screen text-black flex items-center justify-center">
      <div className="rounded-md bg-zinc-200 min-h-[350px] max-w-[90%] w-[480px] flex flex-col items-center justify-center gap-6 ">
        <h1 className="font-bold text-3xl">Counter App</h1>
        <h1 className="font-semibold text-2xl">Steps</h1>
        <div className="flex gap-4 sm:gap-8 px-8">
          <button
            onClick={handleDecrementSteps}
            className="px-2 py-3 bg-red-600 text-white rounded-md"
          >
            Decrement
          </button>
          <h1 className="font-bold text-5xl">{steps}</h1>
          <button
            onClick={handleIncrementSteps}
            className="px-2 py-3 bg-blue-600 text-white rounded-md"
          >
            Increment
          </button>
        </div>
        <h1 className="font-semibold text-2xl">Counter</h1>
        <div className="flex gap-4 sm:gap-8 px-6">
          <button
            onClick={handleDecrement}
            className="px-2 py-3 bg-red-600 text-white rounded-md"
          >
            Decrement
          </button>
          <h1 className="font-bold text-5xl">{counter}</h1>
          <button
            onClick={handleIncrement}
            className="px-2 py-3 bg-blue-600 text-white rounded-md"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}
export default App;
