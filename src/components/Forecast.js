import React from 'react'
import {Link} from 'react-router'


const Forecast = (props) => {
  const featureCity = props.featureCity.city;
  const extendedForecast = props.featureCity.extended.map((day, index)=>{
    return (
      <div>
        <h3>{props.featureCity.extended[index].date.weekday}</h3>
        {props.featureCity.extended[index].conditions} with a high of {props.featureCity.extended[index].high.fahrenheit} and low of {props.featureCity.extended[index].low.fahrenheit}.
      </div>
    )
  });
  console.log(props.featureCity.extended[0].conditions)
  return (
    <div className='extended-forecast'>
      <h2>Your {props.featureCity.city} Extended Forecast</h2>
      <p> currently: {props.featureCity.currently} &  {props.featureCity.temp}</p>

        {extendedForecast}
      <p></p>
      <Link to="/">
        <button>Get Back, Get Back</button>
      </Link>
    </div>
  )
}
export default Forecast
