// var defaultState = {
//   value:0,
//   users:[]
// }
export default (state,action)=>{
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'ADD':
      state.value+= 1
      return state
    case 'SUBTRACT':
      state.value-=1
      return  state
    case 'ADDUSER':
      state.users.push(action.userName)
      return state
    case 'FETCHDATA':
      state.data = action.response
      state.isFetching = false
      return state
    case 'FETCHSTART':
      state.isFetching = true
      return state
    case 'FETCHERROR':
      state.isFetching = false
      state.errorMessage = action.errorMessage
      return state
    default:
      return state
}
}