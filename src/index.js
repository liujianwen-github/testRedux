import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/Main';

import Counter from './components/Counter'
import {store} from './stores/store'
console.log(store)
// Render the main component into the dom
const renderer = ()=>ReactDOM.render(<Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'ADD',text:'121' })}
    onDecrement={() => store.dispatch({ type: 'SUBTRACT' })}
  />, document.getElementById('app'));
renderer()
store.subscribe(renderer)
