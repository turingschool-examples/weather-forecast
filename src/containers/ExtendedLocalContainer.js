import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ExtendedLocal from '../components/ExtendedLocal'
import { fetchExtendedWeatherCurrentLocation } from '../actions/index'

const mapStateToProps = state => {
  const myWeatherObject = state.ExtendedLocalWeatherReducer
  console.log(myWeatherObject)
  if (!myWeatherObject.length) {
    return {}
  }
  return {
    name: myWeatherObject.city.name,
    temp: myWeatherObject.list[1].main.temp,
    description: myWeatherObject.list[1].weather[1].description,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchExtendedWeatherCurrentLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedLocal)
