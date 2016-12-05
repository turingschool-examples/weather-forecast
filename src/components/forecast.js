import React from 'react'
import { Link } from 'react-router'

const Forecast = ({ state, local }) => {
  let data
  let name
  let id = window.location.pathname.slice(-1)
  debugger
  
  if(id >= 0) {
    name = state[id].data.current_observation.display_location.full
    data = state[id].data.forecast.simpleforecast.forecastday
  } else if (id === 'l') {
    name = local.current_observation.display_location.full
    data = local.forecast.simpleforecast.forecastday
  }

  return (
    <div>
    <Link to=''> HOME </Link>
      <h1>
        {name}
      </h1>
      <div>
        {data.map((item, index) => {
          return (
              <div>
                  <h4>
                    {item.date.weekday}
                  </h4>
                    <span>{item.date.monthname}</span>
                    <span> {item.date.day}, </span>
                    <span>{item.date.year}</span>
                  {item.conditions}
                <img
                  src={item.icon_url}
                />
                  <span >
                    High: {item.high.fahrenheit}&deg;
                  </span>
                  <span >
                    Low: {item.low.fahrenheit}&deg;
                  </span>
              </div>
          )
        })}
      </div>
    </div>
  )
}

export default Forecast
