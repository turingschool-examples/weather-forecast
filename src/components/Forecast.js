import React from 'react'
import {Link} from 'react-router'


const Forecast = (props) => {
  const featureCity = props.featureCity.city;
  const extendedForecast = props.featureCity.extended.map((day, index)=>{
    return (
      <div>
        {props.featureCity.extended[index].conditions}
      </div>
    )
  });
  console.log(props.featureCity.extended[0].conditions)
  return (
    <div className='extended-forecast'>
      <p>extended-forecast: {extendedForecast}</p>
      <p>currently: {props.featureCity.currently} &  {props.featureCity.temp}</p>
      <p></p>
      <Link to="/">
        <button>Get Back, Get Back</button>
      </Link>
    </div>
  )
}
export default Forecast
