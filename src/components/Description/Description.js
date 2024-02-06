import React, { Component } from "react";
import { moviesData } from "../../Data";


class MovieDescription extends Component {
  render() {
    return (
      <div className="App">
        <video width="750" height="500" controls>
          <source src={moviesData.trailer} type="video/ogg" />
        </video>
      </div>
    );
  }
}
export default MovieDescription;
