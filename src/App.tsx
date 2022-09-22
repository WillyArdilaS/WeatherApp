import { FormEvent, useEffect, useState } from "react"
import { getWeatherByCity, getWeatherByCoords } from "./api/FetchWeather";
import { SearchBox } from "./components/SearchBox";
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

      } catch (err) {
        setError("Por favor revise su conexión de internet");
      }
    });
  }, []);
  
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");

    try {
      const data = await getWeatherByCity(CITY);
      
      if(data === "404") {
        setError("No se encontró la ciudad");
      } else if(data === "400") {
        setError("Por favor ingrese una ciudad");
      } else if(data === "500") {
        setError("Error en el servidor, por favor intente de nuevo más tarde");
      } else {
        setFetchedData(data);
      }

    } catch (err) {
      setError("Por favor revise su conexión de internet");
    }
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div className="mb-12"> <SearchBox handleSearch={handleSearch}/> </div>
      <WeatherContainer fetchedData={fetchedData} error={error} /> 
    </div>
  )
}

export default App