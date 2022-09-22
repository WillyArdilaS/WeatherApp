import { useEffect, useState } from "react"
import { getWeatherByCoords } from "./api/FetchWeather";
import { WeatherContainer } from "./components/WeatherContainer"

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);
        console.log(data);

      } catch (err) {
        setError("Por favor revise su conexión de internet");
      }
    });
  }, []);
  

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <WeatherContainer fetchedData={fetchedData} error={error} /> 
    </div>
  )
}

export default App