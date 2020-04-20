import axios from "axios";
import React, { useEffect, useState } from "react";
import getUrl from "../../helper/getUrl";
import * as Styled from "./WeatherCard.styles";

const WeatherCard = () => {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await axios.get(getUrl().weather);
      setWeatherData(result.data.list);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading || !weatherData) {
    return <Styled.Wrapper>Loading weather...</Styled.Wrapper>;
  }

  const [
    {
      name,
      main: { temp },
      weather: [{ main, icon }],
    },
  ] = weatherData;

  return (
    <Styled.Wrapper>
      <span>{name}</span>
      <img
        src={`https://openweathermap.org/img/wn/${icon}.png`}
        alt="weather-icon"
      />
      <span>{temp} &#8451;</span>
      <span>&nbsp;{main}</span>
    </Styled.Wrapper>
  );
};

export default WeatherCard;
