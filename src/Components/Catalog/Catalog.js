import React, { useEffect, useState } from "react";
import Categories from "../Categories/Categories";
import Card from "../Card/Card";
function Catalog() {
  const [items, setItems] = useState();

  useEffect(() => {
    fetch(" http://localhost:7070/api/top-sales", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((result) => {
        setItems(result);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <form className="catalog-search-form form-inline">
        <input className="form-control" placeholder="Поиск" />
      </form>
      <Categories />
      <div className="row">
        {items && items.map((item) => <Card key={item.id} item={item} />)}
      </div>
    </section>
  );
}

export default Catalog;
