import React from 'react'
import { Link } from 'react-router'
import PinnedWeather from '../containers/PinnedWeatherContainer'

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <PinnedWeather id={0} />
      <PinnedWeather id={1} />
      <PinnedWeather id={2} />
      <Link to="/settings">
        Settings
      </Link>
    </div>
  )
}

export default Dashboard
