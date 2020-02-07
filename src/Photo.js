import React from "react";
import styled from 'styled-components'
import Media from './Media'

const Caption = styled.div`
    margin-top: 40px;
    width: 80%;
    margin: 40px auto 20px auto;
`;

function Photo({ nasaData }) {
  return (
    <section className="photo">
      {nasaData ? [<Media url={nasaData.url} />,
        <Caption>
          <h2>{nasaData.title}</h2>
          <p>{nasaData.explanation}</p>
        </Caption>]
        :
        <h2>Loading your photo</h2>
      }
    </section>
  )
}

export default Photo;
