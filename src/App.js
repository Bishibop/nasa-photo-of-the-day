import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import "./App.css";
import Photo from "./Photo";
import DatePicker from "./DatePicker";


// Formats the local time for the NASA api call
function formatDate(date) {
  const dateString = date.toLocaleDateString().replace(/\//g, '-');
  const year = dateString.slice(-4);
  const monthAndDate = dateString.slice(0, -5);
  return year + '-' + monthAndDate;

}

const StyledApp = styled.div`
    width: 80%;
    margin: 80px auto;
`;

const StyledHeader = styled.header`
    text-align: center;
    margin-bottom: 50px;
`;

function App() {
  const [nasaData, setNasaData] = useState();
  const [photoDate, setPhotoDate] = useState(new Date());

  useEffect(() => {
    const apiKeyParameter = 'api_key=rbS9YSQx5nnvUtqosZzRi4MwKDgbV6CjnOlOq3a6';
    const nasaAPIUrl= 'https://api.nasa.gov/planetary/apod?'
    const dateParameter = `date=${formatDate(photoDate)}`
    axios.get(nasaAPIUrl + apiKeyParameter + '&' + dateParameter)
      .then(res => {
        setNasaData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [photoDate])

  function changeDate(event) {
    setPhotoDate(new Date(event.target.value));
  }

  return (
    <StyledApp>
      <StyledHeader>
        <h1>Nick Mullen's NASA Photo of the Day</h1>
        <h2>What beauty! What wonder! The infinite abyss!</h2>
      </StyledHeader>
      <Photo nasaData={nasaData} />
      <DatePicker
        date={photoDate.toISOString().slice(0, 10)}
        changeDate={changeDate}
      />
    </StyledApp>
  );
}

export default App;
