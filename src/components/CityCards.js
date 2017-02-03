import React from 'react'
import {Link} from 'react-router'


const CityCards = (props) => {
 const cities = props.cityWeather.map((city)=>{
      return (
        <div className='city-card'>
          <ul>
            City: {city.city}
            <li>Temperature: {city.temp}</li>
            <li>Currently: {city.currently}</li>
            <Link to="/forecast">
              <button>View Extended</button>
            </Link>
          </ul>
        </div>
      )
    })
    return(
      <div>
        {cities}
      </div>
    )
}
export default CityCards
