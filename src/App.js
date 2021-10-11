import "./App.css";
import Background from "./Component/Background";
import Header from "./Component/Header";
import Loading from "./Component/Loading";
import Shop from "./Component/Shop";
import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Background} />
          <Route path="/Shop" component={Shop} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;