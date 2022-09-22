import { WeatherData } from "../interfaces/WeatherData"

export const Location = ({data: {city, country}} : {data:WeatherData}) => {
  return (
    <header className="flex mt-12 text-white text-4xl font-bold">
        <p className="mr-2" id="city"> {city} </p>
        
        <span className="mt-4 text-cyan-500 text-base capitalize" id="country"> {country} </span>
    </header>
  )
}