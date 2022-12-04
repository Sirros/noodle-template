import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./pages/Layout/Layout.jsx";
import Home from "./pages/Home/Home.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/layout" component={Layout}></Route>
          <Route path="/" component={Home}></Route>
          {/* 404 */}
          <Route component={NotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
