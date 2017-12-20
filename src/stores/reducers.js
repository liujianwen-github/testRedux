var defaultState = 0
export default (state=defaultState,action)=>{
  console.log(action)
  switch (action.type) {
    case 'ADD':
      return state + 1
    case 'SUBTRACT':
      return state - 1
    default:
      return state
}
}