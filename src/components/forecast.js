import React from 'react'
import { Link } from 'react-router'

const Forecast = ({ state, local }) => {
  let data
  let name
  let id = window.location.pathname.slice(-1)

  if(id >= 0) {
    name = state[id].data.current_observation.display_location.full
    data = state[id].data.forecast.simpleforecast.forecastday
  } else if (id === 'l') {
    name = local.current_observation.display_location.full
    data = local.forecast.simpleforecast.forecastday
  }
  let sp = ' '

  return (
    <div>
    <Link className='home-link' to=''> HOME </Link>
      <h1 id='name'>
        {name}
      </h1>
      <div className='extended-container'>
        {data.map((item, index) => {
          return (
              <div className='day'>
                  <h4 className='weekday'>
                    {item.date.weekday}
                  </h4>
                    <span className='month-name'>{item.date.monthname}{sp}
                    {item.date.day},{sp}
                    {item.date.year}</span>
                  {item.conditions}
                  <span className='temp-high'>
                    High: {item.high.fahrenheit}&deg;
                  </span>
                  <span className='temp-low'>
                    Low: {item.low.fahrenheit}&deg;
                  </span>
                  <img
                    className='icon'
                    src={item.icon_url}
                  />
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast
