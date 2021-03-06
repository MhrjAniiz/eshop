import HomePage from "./pages/Homepage/HomePage";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shopPage/Shop";
import HeaderNav from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <HeaderNav />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
      </Switch>
    </>
  );
}

export default App;
