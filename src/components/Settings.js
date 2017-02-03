import React from 'react'


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
      </div>
    )
}
export default Settings
