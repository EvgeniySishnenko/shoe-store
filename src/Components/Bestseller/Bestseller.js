import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { bestseller } from "../../api";
function Bestseller() {
  const [items, setItems] = useState({
    items: [],
    loading: false,
    error: null,
  });
  useEffect(() => {
    setItems({
      ...items,
      loading: true,
    });
    const getBestseller = (result, error) => {
      if (result) {
        setItems({
          ...items,
          items: result,
          loading: false,
          error: null,
        });
      } else {
        setItems({
          ...items,
          loading: false,
          error,
        });
      }
    };
    bestseller(getBestseller);
  }, []);
  if (items.error) {
    return <p className="text-center">Something went wrong try again</p>;
  }
  return (
    <>
      {items.items ? (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {items.loading ? (
              <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            ) : (
              items.items.map((item) => <Card key={item.id} item={item} />)
            )}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Bestseller;
