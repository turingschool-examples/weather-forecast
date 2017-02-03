import React from 'react'
import {Link} from 'react-router'

const Settings = (props) => {

 const cities = props.cityWeather.map((city, index)=>{
      return (
        <div className='city-card'>
          <ul>
            <button onClick={() => props.removeClickedCity(index)}>X</button> City: {city.city}
          </ul>
        </div>
      )
    })
    return(
      <div>
        {cities}
        <Link to="/">
          <button>Get Back, Get Back</button>
        </Link>
      </div>
    )
}
export default Settings
