import { Route, Switch, Redirect } from "react-router-dom";
import Product from "./pages/Product";
import Welcome from "./pages/Welcome";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./pages/ProducyDetail";

function App() {
  return (
    <div>
      <MainHeader></MainHeader>
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome></Welcome>
          </Route>
          <Route path="/products" exact>
            {/*leads to this route only if route is exactly look like it */}
            <Product></Product>
          </Route>
          <Route path="/products/:productId">
            <ProductDetail></ProductDetail>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

// our-domain/ => Component A
// our-domain/products => Component B
