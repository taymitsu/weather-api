function DisplayWeather(props) {
  const { temp, feelsLike, desc, cod, message } = props

  //outside of return statement, cod/message
  if (cod !== 200) {
    return (
      <small>{message}</small>
    )
  }
  
  return(
    <div className="WeatherDisplay">
      <h1>{temp}</h1>
      <small>Feels Like: {feelsLike}</small>
      <p>{desc}</p>
    </div>
  )
}

export default DisplayWeather