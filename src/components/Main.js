require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Counter from './Counter'
import TestZ from './TestZ'
// import { createStore } from 'redux'
// import counter from '../stores'
// let yeomanImage = require('../images/yeoman.png');
import {store} from '../stores/store'
import {ADD,SUB,ADDUSER} from '../stores/action'  //action
class AppComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      msg:store.getState()
    }
  }
  render() {
    return (
      <div>
        <Counter
        value={store.getState().value}
        onIncrement={() => store.dispatch(ADD())}
        onDecrement={() => store.dispatch(SUB())}
        addUser = {(val)=> store.dispatch(ADDUSER(val))}/>
        <TestZ value={store.getState().value}/>
      </div>
    );
  }
}

export default AppComponent;
