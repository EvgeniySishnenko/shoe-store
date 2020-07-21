import React from "react";
import Bestseller from "../../Components/Bestseller/Bestseller";
import Catalog from "../../Components/Catalog/Catalog";
function Home() {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Bestseller />
          <Catalog />
        </div>
      </div>
    </main>
  );
}

export default Home;
