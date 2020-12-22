import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/router_in_react/Home";
import About from "./components/router_in_react/About";
import Contact from "./components/router_in_react/Contact";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
}
export default App;