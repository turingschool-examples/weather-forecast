import reducer from '../../src/reducers/CityReducer'


describe('City reducer',()=> {
  it('should return the initial state', ()=> {
    expect(reducer(undefined, [])).toEqual([])
  })

  it('should return state with a new city', ()=> {
    const action =  {
      type:"CITY_WEATHER",
      city:'Denver',
      temp:70,
      currently:'overcast',
      hourly:[{1:1},{2:2},{3:3}],
      extended:[{1:1},{2:2},{3:3}]
    }
    expect(reducer(undefined, action)).toHaveLength(1)
  })

  it('should remove a city ', ()=>{
    const action = {
      type:'REMOVE_CITY'
    }
    const state =
     [{city:'Denver',
       temp:17,
       currently:'sun',
       hourly:[{1:1},{2:2},{3:3}],
       extended:[{1:1},{2:2},{3:3}]
     },
   {city:'Seattle',
     temp:30,
     currently:'sun',
     hourly:[{1:1},{2:2},{3:3}],
     extended:[{1:1},{2:2},{3:3}]
  }]
 const expected =[
    {city:'Denver',
    temp:17,
    currently:'sun',
    hourly:[{1:1},{2:2},{3:3}],
    extended:[{1:1},{2:2},{3:3}]
  }]
  expect(reducer(state,action.type)).toEqual(state)
  })
})
