import React from "react";

function More(props) {
  return (
    <>
      {props.showBtn && (
        <div className="text-center">
          <button
            disabled={props.loading}
            onClick={props.onMoreShoes}
            className="btn btn-outline-primary"
          >
            Загрузить ещё
          </button>
        </div>
      )}
    </>
  );
}

export default More;
