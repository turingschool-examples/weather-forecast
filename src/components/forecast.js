import React from 'react'
import { Link } from 'react-router'

const Forecast = ({ pinned, current, params }) => {
  const id = params.id
  let list
  let name

  if(id >= 0) {
    name = pinned[id].current_observation.display_location.full
    list = pinned[id].forecast.simpleforecast.forecastday
  } else {
    name = current.current_observation.display_location.full
    list = current.forecast.simpleforecast.forecastday
  }

  return (
    <div>
    <Link to=''> HOME </Link>
      <h1>
        {name}
      </h1>
      <div>
        {list.map((item, index) => {
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
