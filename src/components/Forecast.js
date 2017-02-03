import React from 'react'
import {Link} from 'react-router'


const Forecast = (props) => {
  const featureCity = props.featureCity.city;
  const hourlyForecast = props.featureCity.hourly.map((hour, index)=>{
    return (
      <div>
        <h3>{props.featureCity.hourly[index].FCTTIME.weekday_name} {props.featureCity.hourly[index].FCTTIME.civil}</h3>
        <p>{props.featureCity.hourly[index].condition} {props.featureCity.hourly[index].temp.english}F feels like {props.featureCity.hourly[index].feelslike.english}</p>
      </div>
    )
  });
  const extendedForecast = props.featureCity.extended.map((day, index)=>{
    return (
      <div>
        <h3>{props.featureCity.extended[index].date.weekday}</h3>
        {props.featureCity.extended[index].conditions} with a high of {props.featureCity.extended[index].high.fahrenheit} and low of {props.featureCity.extended[index].low.fahrenheit}.
      </div>
    )
  });

  return (
    <div className='extended-forecast'>
      <h1>Your {props.featureCity.city} Extended Forecast</h1>
      <h2> currently: {props.featureCity.currently} &  {props.featureCity.temp}</h2>
        {hourlyForecast}
        {extendedForecast}
      <p></p>
      <Link to="/">
        <button>Get Back, Get Back</button>
      </Link>
    </div>
  )
}
export default Forecast
