import LocalWeatherReducer from '../../src/reducers/LocalWeatherReducer'

describe('local weather reducer', () => {
  it('should return default state', () => {
    expect( LocalWeatherReducer(undefined, {})).toEqual({})
  })
})
