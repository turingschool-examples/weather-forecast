import React from 'react'


const Settings = (props) => {
 const cities = props.cityWeather.map((city)=>{
      return (
        <div className='city-card'>
          <ul>
            <button>X</button> City: {city.city}
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
