import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategories, addCategoryUseRef } from "../../actions/categories";
import { fetchFilterCatalog } from "../../actions/catalog";

function Categories() {
  const { items, loading, error, category } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();
  const catRef = useRef();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(addCategoryUseRef("all"));
  }, [dispatch]);

  const getCategories = (e) => {
    if (category) {
      catRef.current = category;
    }

    if (e.target.value !== catRef.current) {
      dispatch(fetchFilterCatalog(e.target.value));
      dispatch(addCategoryUseRef(e.target.value));
    }
  };
  if (error) {
    return <p className="text-center">Something went wrong try again</p>;
  }
  return (
    <ul className="catalog-categories nav justify-content-center">
      {loading ? (
        ""
      ) : (
        <li className="nav-item">
          <button
            onClick={getCategories}
            value="all"
            className={`nav-link ${"all" == category ? "active" : ""}`}
          >
            Все
          </button>
        </li>
      )}

      {loading
        ? ""
        : items &&
          items.map((item) => (
            <li key={item.id} className="nav-item">
              <button
                onClick={getCategories}
                className={`nav-link ${item.id == category ? "active" : ""}`}
                value={item.id}
              >
                {item.title}
              </button>
            </li>
          ))}
    </ul>
  );
}

export default Categories;
