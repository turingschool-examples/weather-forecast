import ExtendedReducer from '../../src/reducers/LocalWeatherReducer'

describe('extended reducer', () => {
  it('should return default state', () => {
    expect( ExtendedReducer(undefined, {})).toEqual({})
  })
})
