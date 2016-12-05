import React from 'react'

const ExtendedLocal = ({ name, temp, desc }) => {
  return(
    <article>
      <p>Extended Forecast:{name}, {temp}, {desc}</p>
    </article>
  )
}

export default ExtendedLocal
