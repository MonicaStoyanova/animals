import { useState } from "react"; // that is a function given to us by react

function App() {
  const [count, setCount] = useState(0); // we pass a single argument  usually starting initial value(deeffault). This initial value appears on the initial load only
  // when we call usestate we get back an array that has 2 elements inside of it
  // count is the piece of state. Starts as 0 and changes over time
  // if we eant to update our value we use the setCount, it is a setter function used to update our piece of state
  // if we want to change the count we call setCount we NEVER say ex. count = 123

  const handleClick = () => {
    setCount(count + 1); //when the user does something, update the piece of state. It causes React to rerender the component
    // count adopts the new value
  };

  return (
    <div>
      <button onClick={handleClick}>Add anmimal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
