import React from 'react'

const Header = ({name, temp, description}) => {
  return(
    <article>
      <h1>Weather!</h1>
      <section>
        <p>
          Current forecast for {name}: {description} {temp}
        </p>
      </section>
    </article>
  )
}

export default Header
