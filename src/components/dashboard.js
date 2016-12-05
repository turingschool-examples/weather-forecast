import React from 'react'
import { Link } from 'react-router'
import PinnedWeather from '../containers/PinnedWeather'

const Dashboard = () => {
  return (
    <div className="city-card-container">
      <PinnedWeather id={0} />
      <PinnedWeather id={1} />
      <PinnedWeather id={2} />
    </div>
  )
}

export default Dashboard
