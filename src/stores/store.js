import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers'
import {createLogger} from 'redux-logger';
const logger = createLogger();
const defaultState ={
  value:1,
  users:['wdw'],
  data:{},
  isFetching:false,
  errorMessage:''
}
export const store =createStore(
  reducers,
  defaultState,
  applyMiddleware(logger));
