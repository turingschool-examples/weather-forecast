import React from 'react'

const ExtendedLocal = ({ name, temp, description }) => {

  return (
  <article id='pinned-weather'>
    {/* { !!name ? */}
    <p>
      Current extended forecast for {name}: {description} and {temp}°F
    </p>
    {/* : null } */}
  </article>
  )
}

export default ExtendedLocal
