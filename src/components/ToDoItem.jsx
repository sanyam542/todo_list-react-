import React from "react";

export default function ToDoItem(props) {
  function handleClick() {
    console.log("clicked");
    props.onChecked(props.id);
  }

  return <li onClick={handleClick}>{props.text}</li>;
}
