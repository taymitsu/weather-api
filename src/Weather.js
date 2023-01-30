import { useState } from 'react';
import './Weather.css'

function Weather() {

  const[zip, setZip] = useState(' ')
  const[unit, setUnit] = useState(' ')

  return (
    <div className="Weather">
      <h1>{zip} {unit}</h1>
      <form>
        <div>
        <input 
          placeholder="Enter Zipcode"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />

        <button>Submit</button>
        </div>

        <select 
          value={unit}
          onChange={e => setUnit(e.target.value)}
        >
          <option value="metric">Celcius</option>
          <option value="imperial">Fahrenheit</option>
          <option value="standard">Kelvin</option>
        </select>

        <label>
          <input 
            type="radio"
            name="unit"
            checked={unit === 'metric'}
            onChange={() => setUnit('metric')}
          />
          metric
        </label>

        <label>
          <input 
            type="radio"
            name="unit"
            checked={unit === 'imperial'}
            onChange={() => setUnit('imperial')}
          />
          imperial
        </label>

        <label>
          <input 
            type="radio"
            name="unit"
            checked={unit === 'standard'}
            onChange={() => setUnit('standard')}
          />
          standard
        </label>

      </form>
    </div>
  )
}

export default Weather;