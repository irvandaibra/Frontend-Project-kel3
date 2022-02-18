import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import Register from "./components/Register";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/product">
          <Navbar />
          <ProductList />
        </Route>
        <Route path="/Add">
          <Navbar />
          <AddProduct />
        </Route>
        <Route path="/edit ">
          <Navbar />
          <EditProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;