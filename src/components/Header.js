import React from 'react'


const Header = (props) => {
  return(
    <div className='header'>
    {props.weather ? <div>Temperature: {props.weather.temp} Currently: {props.weather.currently}</div> : <div>LOADING</div> }
    </div>
  )
}

export default Header;
