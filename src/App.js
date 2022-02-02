import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../src/pages/home/index";
import About from "../src/pages/about";
import Shop from "../src/pages/shop";
import Contact from "../src/pages/contact";
import Footer from "../src/layout/footer";
import NavBar from "../src/layout/navbar";
import ProductDetail from "./pages/productDetails";
import Login from "../src/pages/login";
import Profile from "./pages/profile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./redux/actions/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";

function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getProduct());
  // }, []);
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/products/:name"
            children={<ProductDetail />}
            exact
            component={ProductDetail}
          />
          <Route path="/shop" exact component={Shop} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/login" exact component={Login} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
