import React from 'react'

const Header = ({ name, temp, desc }) => {
  return(
    <article>
      <h1>Weather!</h1>
      { !!name ?
      <section>
        <p>
          Current forecast for {name}: {desc} and {temp}°F
        </p>
      </section>
      : null }
    </article>
  )
}

export default Header
