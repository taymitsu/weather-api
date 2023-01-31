import { useState } from 'react';
import './Weather.css'
import RadioButton from './RadioButton'
import DisplayWeather from './DisplayWeather'


function Weather() {

  const[zip, setZip] = useState(' ')
  const[unit, setUnit] = useState(' ')
  const[data, setData] = useState(null)

  async function fetchWeather() {
    //always returns a promise 
    //promise needs await function() or functio().then()
    const apikey = '1f2f8f7576287256b30ee482d96a6caa'
    const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${unit}`
    const res = await fetch(path)
    const json = await res.json()

    console.log(json)
    
    const temp = json.main.temp
    const feelsLike = json.main.feels_like
    const desc = json.weather[0].description

    //{...data} calls this 
    setData({
      temp,
      feelsLike,
      desc
    })

  }

  return (
    <div className="Weather">
      {data && <DisplayWeather {...data} />}
      <form onSubmit={e => {
        e.preventDefault()
        fetchWeather()

      }}>
        <div>
        <input 
          placeholder="Enter Zipcode"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />

        <button type="submit">Submit</button>
        </div>

        <select 
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value="metric">Celcius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        <RadioButton 
          label="metric"
          name="unit"
          checked={unit === 'metric'}
          onChange={() => setUnit('metric')}
        />

        <RadioButton 
          label="imperial"
          name="unit"
          checked={unit === 'imperial'}
          onChange={() => setUnit('imperial')}
        />

        <RadioButton 
          label="standard"
          name="unit"
          checked={unit === 'standard'}
          onChange={() => setUnit('standard')}
        />

      
      </form>
    </div>
  )
}

export default Weather;