import React from 'react';
import { Link } from 'react-router';

const PinnedWeather = ({ names }) => {
  let forecast;

  console.log(names);

  if (names) {
    forecast = names.map((pins, i) => <div key={i} className='pinned-weather'> Current forecast for {pins.data.current_observation.display_location.full}: {pins.data.current_observation.temp_f} and {pins.data.current_observation.weather}°F
    <Link to={`/forecast/${i}`} className='link'> Extended Forecast </Link>
    </div>)
  } else { forecast = '' }

  return (
  <article className="pinned-weather">
    {forecast}
  </article>
  )
}


export default PinnedWeather
