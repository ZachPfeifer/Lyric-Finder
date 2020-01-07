import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import NavBar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";



class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/Lyric-Finder/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />

              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider >
    );
  }
}

export default App;
