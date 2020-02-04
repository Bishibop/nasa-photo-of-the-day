import React from "react";
import Media from './Media'

function Photo({ nasaData }) {
  return (
    <section className="photo">
    {nasaData ?
      [<Media url={nasaData.url} />,
      <p>{nasaData.title}</p>,
      <p>{nasaData.explanation}</p>]
      :
      <h2>Loading your photo</h2>
    }
    </section>
  )
}

export default Photo;
