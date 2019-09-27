import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import "../scss/App.scss";
import SentencesList from "./SentencesList";
import SentenceDetail from "./SentenceDetail";
import apiInfo from "../api/turronApi.json";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sentences: apiInfo
    };
    this.renderHome = this.renderHome.bind(this);
    this.renderAbout = this.renderAbout.bind(this);
    this.renderDetail = this.renderDetail.bind(this);
  }
  renderHome() {
    return <Home />;
  }
  renderAbout() {
    return <SentencesList sentences={this.state.sentences} />;
  }
  renderDetail(props) {
    let selectedSentence;
    for (const sentence of this.state.sentences) {
      if (sentence.id === props.match.params.id) {
        selectedSentence = sentence;
      }
    }
    console.log(selectedSentence);
    return <SentenceDetail sentence={selectedSentence} />;
  }

  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route path="/about" render={this.renderAbout} />
          <Route exact path="/:id" render={this.renderDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
