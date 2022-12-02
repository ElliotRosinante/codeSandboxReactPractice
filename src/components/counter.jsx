import React from "react";

function Counter(props) {
  return (
    <div>
      <span>{props.countObject.value}</span>
      <button
        onClick={() => {
          props.parentStateData.incrementCount(props.countObject);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          props.parentStateData.decrementCount(props.countObject);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          props.parentStateData.deleteCount(props.countObject);
        }}
      >
        Delete
      </button>
    </div>
  );
}
export default Counter;
