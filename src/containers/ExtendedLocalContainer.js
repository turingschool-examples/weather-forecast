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
    name: myWeatherObject[0].city.name,
    temp: myWeatherObject[0].list[0].main.temp,
    desc: myWeatherObject[0].list[0].weather[0].description
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchExtendedWeatherCurrentLocation }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ExtendedLocal)
