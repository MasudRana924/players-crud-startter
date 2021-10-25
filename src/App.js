import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddPlayers from './Components/AddPlayers/AddPlayers';
import NotFound from './Components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route eaxct path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/add">
            <AddPlayers></AddPlayers>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
