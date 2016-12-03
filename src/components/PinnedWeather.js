import React from 'react'

const PinnedWeather = ({ name, temp, description }) => {

  return (
  <article>
    {/* { !!name ? */}
    <p>
      Current forecast for {name}: {description} and {temp}°F
    </p>
    {/* : null } */}
  </article>
  )
}


export default PinnedWeather
