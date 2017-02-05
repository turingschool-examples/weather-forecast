import * as actions from '../../src/actions'

describe('actions', ()=> {
  it.skip('should create an action', () => {
    expect(true).toEqual(true)
  });
  it.skip('should current Weather', ()=> {
    let city= "DENVER"
    const temp= 'hello'
    const currently= 'hello'
    const extended= 'hello'
    const hourly= 'hello'
    
    const expectedReturn = {
      type:'CURRENT_WEATHER',
      city,
      temp,
      currently,
      extended,
      hourly
    }
    expect(actions.currentWeather()).toEqual(expectedReturn);
  })

 })
