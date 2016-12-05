import ExtendedReducer from '../../src/reducers/ExtendedReducer'

describe('extended reducer', () => {
  it('should return default state', () => {
    expect( ExtendedReducer(undefined, {})).toEqual({})
  })
})
