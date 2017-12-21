export function ADD(){
  return {
    type:'ADD'
  }
}
export function SUB(){
  return {
    type:'SUBTRACT'
  }
}
export function ADDUSER(val){
  return {
    type:'ADDUSER',
    userName:val
  }
}