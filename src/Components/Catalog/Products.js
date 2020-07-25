import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { fetchProducts } from "../../actions/products";
import Table from "./Table";
import Counter from "./Counter";
import Sizes from "./Sizes";
import Preloader from "../Preloader/Preloader";

function Products(props) {
  const routeMatch = useRouteMatch();
  const history = useHistory();

  const [size, setSize] = useState({
    size: "",
  });
  const [counter, setCounter] = useState({
    counter: 1,
  });
  const { item, loading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let avalible;
  let arr =
    JSON.parse(localStorage.getItem("cart")) !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
  // localStorage.clear();

  useEffect(() => {
    dispatch(fetchProducts(routeMatch.params.id));
  }, [dispatch]);
  if (item.sizes) {
    avalible = item.sizes.filter((a) => a.avalible === true);
  }

  const selectedSize = (e) => {
    setSize({
      size: e.target.dataset.size,
    });
  };

  const FnCounter = (e) => {
    const operation = e.target.dataset.counter;
    if (operation === "plus" && counter.counter < 10) {
      setCounter({
        counter: counter.counter + 1,
      });
    } else if (operation === "minus" && counter.counter > 1) {
      setCounter({
        counter: counter.counter - 1,
      });
    }
  };
  const addToCart = (e) => {
    // e.preventDefault();
    if (size.size !== "" && avalible !== undefined) {
      if (arr.length !== 0) {
        const index = arr.findIndex((el) => {
          return el.id === item.id && el.size === size.size;
        });

        if (index >= 0) {
          arr[index]["count"] += counter.counter;
        } else {
          arr = [
            ...arr,
            {
              id: item.id,
              title: item.title,
              size: size.size,
              count: counter.counter,
              price: item.price,
            },
          ];
        }
      } else {
        arr = [
          {
            id: item.id,
            title: item.title,
            size: size.size,
            count: counter.counter,
            price: item.price,
          },
        ];
      }
      localStorage.setItem("cart", JSON.stringify(arr));
      history.push("/cart");
    }
  };
  return (
    <section className="catalog-item">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <h2 className="text-center">{item.title}</h2>
          <div className="row">
            <div className="col-5">
              <img
                src={item.images && item.images[0]}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-7">
              <Table item={item} />
              <div className="text-center">
                <Sizes
                  onSelectedSize={selectedSize}
                  item={item}
                  size={size.size}
                />

                {avalible !== undefined && (
                  <Counter onCounter={FnCounter} counter={counter.counter} />
                )}
              </div>
              {avalible !== undefined && (
                <button
                  onClick={addToCart}
                  disabled={size.size !== "" ? false : true}
                  className="btn btn-danger btn-block btn-lg"
                >
                  В корзину
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </section>
  );
}
export default Products;
