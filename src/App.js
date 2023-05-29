import "./App.css";
import { useState } from "react"; // that is a function given to us by react
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  //const [count, setCount] = useState(0); // we pass a single argument  usually starting initial value(deeffault). This initial value appears on the initial load only
  // when we call usestate we get back an array that has 2 elements inside of it
  // count is the piece of state. Starts as 0 and changes over time
  // if we eant to update our value we use the setCount, it is a setter function used to update our piece of state
  // if we want to change the count we call setCount we NEVER say ex. count = 123
  // setCount is called setter function
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // setCount(count + 1); //when the user does something, update the piece of state. It causes React to rerender the component
    // count adopts the new value
    setAnimals([...animals, getRandomAnimal()]); // creates new array out of the existing one + the new value
    // we do not use this --> animals.push(getRandomAnimal() because it modifies a piece of state
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />; // that is how we print lists
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add anmimal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;
