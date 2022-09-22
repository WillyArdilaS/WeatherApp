import { WeatherData } from "../interfaces/WeatherData"

export const DegreeSection = ({data: {temperature, icon, description}} : {data:WeatherData}) => {
  return (
    <>
        <section className="flex justify-center text-white text-5xl font-bold">
          <span className="text-yellow-500" id="temperature"> {temperature} </span> °C
        </section>

        <section className="flex justify-center">
          <img src={icon} alt="Icono del clima" id="iconImg" />
        </section>

        <section className="mb-6 text-white text-xl font-bold uppercase" id="description"> {description} </section>
    </>
  )
}