import React from 'react'

const ExtendedLocal = ({ date, name, temp, desc }) => {
  return(
    <article className="extended-local">
      <p>Extended Forecast:{date}, {name}, {temp}, {desc}</p>
    </article>
  )
}

export default ExtendedLocal
