import { useEffect, useState } from "react";
import { DegreeSection } from "./DegreeSection";
import { DetailsTable } from "./DetailsTable";
import { Location } from "./Location";

export const WeatherContainer = ({fetchedData, error} : {fetchedData:any; error:string}) => {
  const [weather, setWeather] = useState({
    city: "",
    country: "",
    temperature: 0,
    description: "", 
    icon: "",
    humidity: "",
    feels: "",
    visibility: "",
    pressure: "",
    longitude: "",
    latitude: "",
    windSpeed: ""
  });

  useEffect(() => {
    if(fetchedData) {
      setWeather({
        city: fetchedData.name,
        country: fetchedData.sys.country,
        temperature: Math.floor(fetchedData.main.temp - 273),
        description: fetchedData.weather[0].description, 
        icon: `http://openweathermap.org/img/wn/${fetchedData.weather[0].icon}@2x.png`,
        humidity: fetchedData.main.humidity + "%",
        feels: Math.floor(fetchedData.main.feels_like - 273) + "°C",
        visibility: fetchedData.visibility + "m",
        pressure: fetchedData.main.pressure + "hPa",
        longitude: fetchedData.coord.lon,
        latitude: fetchedData.coord.lat,
        windSpeed: fetchedData.wind.speed + "m/s"
      });
    }
  }, [fetchedData]);
  

  return (
    <main className="w-96 mt-12 rounded-3xl bg-gradient-to-b from-gray-800 to-gray-700 shadow-lg"> 

      {error === "" ? (
        <div className="w-full flex flex-col items-center p-8">
          <h1> <Location data={weather} /> </h1>
          <h1> <DegreeSection data={weather} /> </h1>
          <h1> <DetailsTable data={weather} /> </h1>
        </div>
      ) : (
        <div className="h-56 flex justify-center items-center p-4 text-white text-2xl text-center font-bold"> {error} </div>
      )}

    </main>
  )
}