import React, { useState } from "react";
import InputArea from "./InputArea";
import ToDoItem from "./ToDoItem";
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
  }
  function deleteItem(id) {
    setItems((prevValue) => {
      return prevValue.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={addItem} />
      <p>(click on item to delete)</p>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
