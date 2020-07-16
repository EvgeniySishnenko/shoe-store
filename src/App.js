import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import Catalog from "./pages/Catalog/Catalog";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Page404 from "./Components/Page404/Page404";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Banner />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts.html" component={Contacts} />
          <Route path="/about.html" component={About} />
          <Route path="/catalog.html" component={Catalog} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
