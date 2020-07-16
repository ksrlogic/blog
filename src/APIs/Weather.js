import React, { useState, useEffect } from "react";
const Ex = {
  coord: { lon: 126.98, lat: 37.57 },
  weather: [
    { id: 501, main: "Rain", description: "moderate rain", icon: "10n" },
    { id: 701, main: "Mist", description: "mist", icon: "50n" },
  ],
  base: "stations",
  main: {
    temp: 291.75,
    feels_like: 292.84,
    temp_min: 291.15,
    temp_max: 292.15,
    pressure: 1001,
    humidity: 93,
  },
  visibility: 3200,
  wind: { speed: 2.1, deg: 60 },
  clouds: { all: 90 },
  dt: 1594648704,
  sys: {
    type: 1,
    id: 8117,
    country: "KR",
    sunrise: 1594585268,
    sunset: 1594637646,
  },
  timezone: 32400,
  id: 1835848,
  name: "Seoul",
  cod: 200,
};
const getIcon = (status) => {
  switch (status) {
    case "Thunderstorm":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Thunderstorm.png"}
          alt="ThunderStorm"
        ></img>
      );

    case "Rain":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Rain.png"}
          alt="Rain"
        ></img>
      );

    case "Drizzle":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Drizzle.png"}
          alt="Drizzle"
        ></img>
      );

    case "Snow":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Snow.png"}
          alt="Snow"
        ></img>
      );

    case "Clear":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Clear.png"}
          alt="Clear"
        ></img>
      );

    case "Clouds":
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/cloud.png"}
          alt="Clouds"
        ></img>
      );
    default:
      return (
        <img
          className="weather-icon"
          src={"/weather_icons/Fog.png"}
          alt="Fog"
        ></img>
      );
  }
};
const Weather = () => {
  const [weather, setWeather] = useState(Ex);
  useEffect(() => {
    const fetchData = async () => {
      const getData = await fetch(
        "http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=0ae7a7a593b12267a85121f7db948907"
      );
      const Data = await getData.json();
      setWeather(Data);
    };
    fetchData();
  }, []);
  const todaysWeather = weather.weather[0].main;

  return <>{getIcon(todaysWeather)}</>;
};

export default Weather;
