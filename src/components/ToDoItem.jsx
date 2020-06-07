import React from "react";

function ToDoItem(props) {
  return (
    <div
      onClick={() => {
        props.onChecked(props.text);
      }}
    >
      <li>{props.text}</li>
    </div>
  );
}

export default ToDoItem;
