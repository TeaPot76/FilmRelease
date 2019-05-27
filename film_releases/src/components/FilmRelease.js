import React, {Component} from "react";

class FilmRelease extends Component{
  render(){
    return(
    <div className="film-release">

    <a href={this.props.url}><li>{this.props.name}</li></a>

    </div>
    )
  }
}

export default FilmRelease;
