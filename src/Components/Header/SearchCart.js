import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { changeSearchField } from "../../actions/search";
import Cart from "./Cart";
function SearchCart() {
  const history = useHistory();
  const [input, setInput] = useState({
    value: "",
  });
  const [invisible, setInvisible] = useState({
    invisible: true,
  });
  const { value } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    const { value } = evt.target;
    setInput({
      value,
    });
  };
  const showInput = () => {
    if (input.value.length === 0) {
      setInvisible({
        invisible: !invisible.invisible,
      });
    } else {
      dispatch(changeSearchField(input.value));
      setInvisible({
        invisible: !invisible.invisible,
      });
      setInput({
        value: "",
      });
      history.push("/catalog.html");
    }
  };
  return (
    <div>
      <div className="header-controls-pics">
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={showInput}
        ></div>
        <Cart />
      </div>
      <form
        data-id="search-form"
        className={`header-controls-search-form form-inline ${
          invisible.invisible && "invisible"
        } `}
      >
        <input
          onChange={handleChange}
          value={input.value}
          className="form-control"
          placeholder="Поиск"
        />
      </form>
    </div>
  );
}
export default SearchCart;
