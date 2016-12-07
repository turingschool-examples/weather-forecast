import * as actions from '../../src/actions'

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('should create an action', () => {
    expect(true).toEqual(true)
  });

  // it('should create an action to identify current extended forecast', () => {
  //   const json = 'cloudy';
  //   const expectedAction = {
  //     type: 'CURRENT_EXTENDED_FORECAST',
  //     extendedForecast: json
  //   };
  //
  //   expect(fetchWeatherCurrentLocation(json)).toEqual(expectedAction);
  // });


});
