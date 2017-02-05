import React from 'react'
import {Link} from 'react-router'
import moment from 'moment'

const Header = (props) => {
  let message = ""
  let now = moment().format('HH:mm:ss')
  let sunrise = moment.parseZone(`${props.sunrise.sunrise}`).local().format('HH:mm:ss')
  let midMorning = moment(sunrise, 'HH:mm:ss').add(2,'h').format('HH:mm:ss')
  let sunset = moment.parseZone(`${props.sunrise.sunset}`).local().format('HH:mm:ss')
  let lateAfternoon = moment(sunset, 'HH:mm:ss').subtract(2,'h').format('HH:mm:ss')
  switch(true){
    case (sunrise < now && now < midMorning):
      message = "rise and shine baby";
      break;
    case (midMorning < now && now < lateAfternoon):
      message = "you better be doing productive shit rn";
      break;
    case (lateAfternoon < now && now < sunset):
      message = "probably should consider eating dinner";
      break;
    default:
      message = "it's night now. time to shine"
  }


  return(
    <div className='header'>
      <section className='sundial'>
        sunrise: {sunrise}
        <br/>sunset: {sunset}
        <br/>currently: {now}
        <br/>{message}
      </section>
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
