import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCatalog, moreShoes } from "../../actions/catalog";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";
function Catalog(props) {
  const { items, loading, error, offset, showBtn } = useSelector(
    (state) => state.catalog
  );
  const { category } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCatalog());
  }, [dispatch]);

  const moreShoesBtn = () => {
    dispatch(moreShoes(category, offset));
  };
  if (error) {
    return <p className="text-center">Something went wrong try again</p>;
  }
  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
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
