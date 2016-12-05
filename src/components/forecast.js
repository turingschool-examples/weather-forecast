import React from 'react';
import { Link } from 'react-router';

const Forecast = ({ state }) => {
  let forecast;
  if (state) {
    forecast = state.map((city, i) => <div key={i} className='pinned-weather'> Current forecast for {city.data.data.name}: {city.data.data.weather[0].description} and {city.data.data.main.temp}°F
    <Link to='/' className='link'> HOME </Link>
    </div>)
  } else { forecast = '' }

  return (
  <article>
    {forecast}
  </article>
  )
}


export default Forecast
