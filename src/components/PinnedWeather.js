import React from 'react';
import { Link } from 'react-router';
import { fetchWeatherPinnedLocation } from '../actions/index'

const PinnedWeather = ({ state, id }) =>
{
  return (
    <div className="pinned-city">
      {state[id] ?
        <Link to={`/forecast/${id}`}>
          <div>
            {state[id].data.current_observation.display_location.full}                  {state[id].data.current_observation.temp_f}&deg;
            {state[id].data.current_observation.weather}
          </div>
        </Link>
        :
        <Link to="/settings">
          Save a New City
        </Link>
      }
    </div>
  )
}



export default PinnedWeather
