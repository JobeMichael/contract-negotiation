export default function getUrl() {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";

  return {
    weather:
      proxyUrl +
      "https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=439d4b804bc8187953eb36d2a8c26a02",
  };
}
