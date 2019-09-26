import React from "react";
import Header from "./Header";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" />
        </Switch>
      </div>
    );
  }
}

export default App;
