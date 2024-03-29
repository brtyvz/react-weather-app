import { useEffect, useState } from "react";
import axios from "axios";

import { usePosition } from "use-position";
import HavaDurumu from "./components/HavaDurumu";

const App = () => {
  const [weather, setWeather] = useState();
  const { latitude, longitude } = usePosition();
  const getWeatherData = async (lat, lon) => {
    const key = "daf952f2c972e0fc01431cf32031bdd9";
    const lang = navigator.language.split("-")[0];
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=${lang}&appid=${key}&units=metric`
      );
      setWeather(data);
    } catch {
      alert("hata");
    }
  };
  useEffect(() => {
    latitude && longitude && getWeatherData(latitude, longitude);
  }, [latitude, longitude]);
  return (
    <div>
      <h2>Hava Durumu</h2>
      <HavaDurumu weather={weather} />
    </div>
  );
};
export default App;