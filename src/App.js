import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import CatalogPage from "./pages/Catalog/CatalogPage";
import ProductsPage from "./pages/Catalog/ProductsPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./pages/Page404/Page404";
import CartPage from "./pages/Cart/CartPage";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={CartPage} />
          <Route path="/catalog/:id" component={ProductsPage} />
          <Route path="/catalog" component={CatalogPage} />

          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
