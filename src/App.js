import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddFood from './components/AddFood/AddFood';
import Home from './components/Home/Home';
import Category from './components/Category/Category';
import Categories from './components/Categories/Categories';
import SingleMeal from './components/SingleMeal/SingleMeal';
import Checkout from './components/Checkout/Checkout';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addFood">About</Link>
            </li>
            <li>
              <Link to="/">Users</Link>
            </li>
          </ul>
        </nav>
        <Categories></Categories>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/addFood">
            <AddFood></AddFood>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/category/:key">
            <Category></Category>
          </Route>
          <Route path="/singleMeal/:id">
            <SingleMeal></SingleMeal>
          </Route>
          <Route path="/checkout/:value">
            <Checkout></Checkout>
          </Route>


          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
