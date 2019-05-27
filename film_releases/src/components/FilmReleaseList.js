import React, {Component} from "react";
import FilmRelease from "./FilmRelease";

class FilmReleaseList extends Component{

  render(){

  const releaseNodes = this.props.data.map(release => {
    return(
      <FilmRelease name={release.name}key={release.id}
      url={release.url} ></FilmRelease>
    );
  });

    return(

      <div className="film-release-list">
      <h4>Printing from list</h4>
      {releaseNodes}
      </div>
    )
  }
}

export default FilmReleaseList;
