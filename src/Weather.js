import { useState } from 'react';
import './Weather.css'

function Weather() {

  const[ zip, setZip ] = useState('')
  return (
    <div className="Weather">
      <h1>{zip}</h1>
      <form>
        <input 
          placeholder="Enter Zipcode"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Weather;