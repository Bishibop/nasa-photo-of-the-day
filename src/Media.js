import React from "react";

function Media(props) {
  if (props.url.match('youtube')) {
    return (
      <iframe width="560" height="315" src={props.url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    )
  } else {
    return  (
      <img src={props.url} alt="NASA Photo of the Day"/>
    )
  }
}

export default Media;
