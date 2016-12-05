import React from 'react';
import { Link } from 'react-router';

const PinnedWeather = ({ state, id }) =>
{
  return (
    <div className="pinned-weather">
      {state[id] ?
        <Link to={`/forecast/${id}`}>
          <div>
            <span className='pinned-city'>
              {state[id].data.current_observation.display_location.full}
            </span>
            <span className='pinned-observation'>
              {state[id].data.current_observation.temp_f}&deg;
              {state[id].data.current_observation.weather}
            </span>
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
