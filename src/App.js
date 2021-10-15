import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ViewNaruto from "./views/ViewNaruto";
import ViewDragonBall from "./views/ViewDragonBall";
import PageNotFound from "./views/PageNotFound";
import PageAnime from "./views/PageAnime";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={PageAnime}></Route>
        <Route path="/dragonball" exact component={ViewDragonBall}></Route>
        <Route path="/naruto" exact component={ViewNaruto}></Route>
        <Route exact component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}
//ala mrd :v
export default App;
