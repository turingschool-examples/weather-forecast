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
              <button onClick={()=>props.changeFeatureCity(city)}>View Extended</button>
            </Link>
          </ul>
        </div>
      )
    })

    return(
      <div className='cities'>
        {cities}
      </div>
    )
}
export default CityCards
