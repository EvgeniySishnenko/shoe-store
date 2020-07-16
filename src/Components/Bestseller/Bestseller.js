import React, { useEffect, useState } from "react";
import Card from "../Card/Card";

function Bestseller() {
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
    <>
      {items ? (
        <section className="top-sales">
          <h2 className="text-center">Хиты продаж!</h2>
          <div className="row">
            {items.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Bestseller;
