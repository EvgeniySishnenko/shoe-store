import React from "react";
function Table(props) {
  return (
    <p>
      Количество:{" "}
      <span className="btn-group btn-group-sm pl-2">
        <button
          data-counter="minus"
          onClick={props.onCounter}
          className="btn btn-secondary"
        >
          -
        </button>
        <span className="btn btn-outline-primary">{props.counter}</span>
        <button
          data-counter="plus"
          onClick={props.onCounter}
          className="btn btn-secondary"
        >
          +
        </button>
      </span>
    </p>
  );
}
export default Table;
