import React from 'react'
import {Link} from 'react-router'


const Header = (props) => {
  return(
    <div className='header'>
      {props.weather ? <div>Current Weather for <strong>{props.weather.city} </strong> Temperature: {props.weather.temp}&#176;F Currently: {props.weather.currently} </div> : <div>LOADING</div> }
      <Link to="/forecast">
        <button onClick={()=>props.changeFeatureCity(props.weather)}>
          View Extended Forecast >>
        </button>
      </Link>
    </div>
  )
}

export default Header;
