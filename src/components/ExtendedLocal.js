import React from 'react'

const ExtendedLocal = ({ name, temp, desc }) => {
  return(
    <article>
      <p>{name}, {desc}, {temp}</p>
    </article>
  )
}

export default ExtendedLocal
