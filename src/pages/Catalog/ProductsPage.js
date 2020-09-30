import React from "react";
import Products from "../../Components/Catalog/Products";
function ProductsPage(props) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Products />
        </div>
      </div>
    </main>
  );
}
export default ProductsPage;
