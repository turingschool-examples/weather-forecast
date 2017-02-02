import React from 'react'


const CityCards = (props) => {
 const cities = props.cityWeather.map((city)=>{
      return (
        <div className='city-card'>
          <ul>
            City: {city.city}
            <li>Temperature: {city.temp}</li>
            <li>Currently: {city.currently}</li>
            <button>View Extended</button>
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
