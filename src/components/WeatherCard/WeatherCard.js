import axios from "axios";
import React, { useEffect, useState } from "react";
import getUrl from "../../helper/getUrl";
import * as Styled from "./WeatherCard.styles";

const WeatherCard = () => {
  const [weatherData, setWeatherData] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(false);

      const result = await axios.get(getUrl().weather);

      setWeatherData(result.data.list);
      setLoading(true);
    };
    getData();
  }, [setLoading]);

  if (!loading) {
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
