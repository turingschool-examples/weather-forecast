import React from 'react'

const PinnedWeather = ({ state }) => {
  let forecast;
  if (state) {
    forecast = state.map((city) => <div className='pinned-weather'> Current forecast for {city.data.data.name}: {city.data.data.weather[0].description} and {city.data.data.main.temp}°F </div>)
  } else { forecast = '' }

  return (
  <article>
    {forecast}
  </article>
  )
}


export default PinnedWeather
