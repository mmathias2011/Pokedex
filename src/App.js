import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Pokedex from "./Pokedex";
import Pokemon from "./Pokemon";

function App() {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route path="/:pokemonid" render={(props) => <Pokemon {...props} />} />
    </Switch>
  );
}

export default App;
