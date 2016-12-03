import React from 'react'

const Header = ({name, temp, desc, otherName, otherDesc, otherTemp}) => {
  return(
    <article>
      <h1>Weather!</h1>
      { !!name ?
      <section>
        <p>
          Current forecast for {name}: {desc} and {temp}°F
        </p>
        { !!otherName ?
        <p>
          Current forecast for {otherName}: {otherDesc} and {otherTemp}°F
        </p>
        : null }
      </section>
      : null }
    </article>
  )
}

export default Header
