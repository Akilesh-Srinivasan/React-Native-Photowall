import React, { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./addPhoto";
import { Route } from "react-router-dom";
import { removePosts } from "../redux/actions";

class Main extends Component {
  constructor() {
    super();
  }

  render() {
    console.log("props", this.props);
    return (
      <div>
        <h1>
          <Link to="/">Photowall</Link>
        </h1>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <PhotoWall {...this.props} />
            </div>
          )}
        />
        <Route
          path="/AddPhoto"
          render={({ history }) => (
            <AddPhoto {...this.props} onHistory={history} />
          )}
        />
      </div>
    );
  }
}

export default Main;
