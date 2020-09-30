import React from "react";
function Sizes(props) {
  return (
    <p>
      Размеры в наличии:{" "}
      {props.item.sizes &&
        props.item.sizes.map((a) => {
          if (a.avalible === true) {
            return (
              <span
                data-size={a.size}
                key={a.size}
                onClick={props.onSelectedSize}
                className={`catalog-item-size ${
                  props.size == a.size ? "selected" : ""
                }`}
              >
                {a.size}
              </span>
            );
          }
        })}
    </p>
  );
}
export default Sizes;
