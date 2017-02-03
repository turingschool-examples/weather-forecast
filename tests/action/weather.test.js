import * as actions from '../../src/actions'

describe('actions', ()=> {
  it('should create an action to add a todo', ()=> {
    const text = "Find Tim"
    const id = 0
    const expectedReturn = {
      type:'ADD_TODO',
      text,
      id
    }
    expect(actions.addTodo(text, id)).toEqual(expectedReturn);
  })
//   it('should toggle todos',()=>{
//     const id = 0
//     let expected = {
//       type:'TOGGLE_TODO',
//       id,
//     }
//     expect(actions.toggleTodo(id)).toEqual(expected)
//   })
//   it('should set filter',()=>{
//     const filter= 'hello'
//     let expected = {
//       type:'SET_FILTER',
//       filter
//     }
//     expect(actions.setFilter(filter)).toEqual(expected)
//   })
 })
