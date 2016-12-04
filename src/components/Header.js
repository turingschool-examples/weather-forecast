import React from 'react'

const Header = ({ name, temp, desc }) => {
  return(
    <article id='header'>
      <h1 id='title' className='glow'>Weather!</h1>
      { !!name ?
      <section id='current-forecast'>
        The current forecast for {name} is {desc} at {temp}°F
      </section>
      : null }
    </article>
  )
}

export default Header
