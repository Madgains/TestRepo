import AccountSelector from "jda-catman-react-data-controls/dist/account";
import React, { Fragment } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import FloorplanView from "./view/floorplan";
import PlanogramView from "./view/planogram";

const App: React.FC = () => {
  return (
    <Router>
      <Fragment>

        <h3>Welcome to Demo Dynamic Redux...</h3>

        <Link className={"AppPadding"} to='/'>Home</Link>
        <Link className={"AppPadding"} to='/Account'>Account</Link>
        <Link className={"AppPadding"} to='/PlanogramView'>Planogram View</Link>
        <Link className={"AppPadding"} to='/FloorplanView'>Floorplan View</Link>

        <hr />
        <Route exact path='/' component={Home} />
        <Route path='/Account' component={AccountSelector} />
        <Route path='/PlanogramView' component={PlanogramView} />
        <Route path='/FloorplanView' component={FloorplanView} />
      </Fragment>
    </Router>
  );
}

export default App;
