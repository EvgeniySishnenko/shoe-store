import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  fetchAllCatalog,
  moreShoes,
  searchGetShoes,
} from "../../actions/catalog";
import { changeSearchField } from "../../actions/search";
import { addCategoryUseRef } from "../../actions/categories";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";
function Catalog(props) {
  const { items, loading, offset, showBtn } = useSelector(
    (state) => state.catalog
  );
  const { category } = useSelector((state) => state.categories);
  const { value } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = history.location;
  useEffect(() => {
    if (items.length === 0) {
      dispatch(fetchAllCatalog());
    }
  }, [dispatch]);

  const moreShoesBtn = () => {
    dispatch(moreShoes(category, offset, value));
  };
  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(changeSearchField(value));
  };
  const handleSubmit = useCallback(
    async (evt) => {
      evt.preventDefault();
      const { value } = evt.target.search_shoes;
      if (value.trim() !== "") {
        dispatch(searchGetShoes(value.trim()));
        dispatch(addCategoryUseRef("all"));
      }
    },
    [dispatch, value]
  );

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {pathname !== "/" && (
        <form
          onSubmit={handleSubmit}
          className="catalog-search-form form-inline"
        >
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Поиск"
            value={value}
            name="search_shoes"
          />
        </form>
      )}

      <Categories />
      <div className="row">
        {loading ? (
          <Preloader />
        ) : (
          items && items.map((item) => <Card key={item.id} item={item} />)
        )}
      </div>
      <More showBtn={showBtn} loading={loading} onMoreShoes={moreShoesBtn} />
    </section>
  );
}

export default Catalog;
