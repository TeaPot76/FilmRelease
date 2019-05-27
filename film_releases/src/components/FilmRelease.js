import React, {Component} from "react";

class FilmRelease extends Component{
  render(){
    return(
    <div className="film-release">
    <a href={this.props.url}><h4>{this.props.name}</h4></a>

    </div>
    )
  }
}

export default FilmRelease;
