import React from 'react'

const PinnedWeather = ({ name, temp, description }) => {

  return (
  <article id='pinned-weather'>
    {/* { !!name ? */}
    <p>
      Current forecast for {name}: {description} and {temp}°F
    </p>
    {/* : null } */}
  </article>
  )
}


export default PinnedWeather
