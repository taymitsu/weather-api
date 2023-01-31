function DisplayWeather(props) {
  const { temp, feelsLike, desc } = props
  
  return(
    <div className="WeatherDisplay">
      <h1>{temp}</h1>
      <small>Feels Like: {feelsLike}</small>
      <p>{desc}</p>
    </div>
  )
}

export default DisplayWeather