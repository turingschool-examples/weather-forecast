// import { connect } from 'react-redux'
// // import { bindActionCreators } from 'redux'
// import ExtendedLocal from '../components/ExtendedLocal'
// import { fetchExtendedLocation } from '../actions/index'
//
// const mapStateToProps = state => {
// 	if (!state.LocalWeatherReducer.current_observation) {
//     return {}
//   }
//   return {
//     name: state.LocalWeatherReducer.current_observation.display_location.full,
//     temp: state.LocalWeatherReducer.current_observation.temp_f,
//     desc: state.LocalWeatherReducer.current_observation.weather,
//   }
// }
//
// // const mapDispatchToProps = dispatch => {
// //   return bindActionCreators({ fetchExtendedLocation }, dispatch)
// // }
//
// export default connect(mapStateToProps)(ExtendedLocal)
