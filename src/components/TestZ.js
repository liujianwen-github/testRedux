import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {store} from '../stores/store'
import Test from './Test'
class TestZ extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="test0">
        <p>test0 page</p>
        <p>{this.props.value}</p>
        <Test
          users={store.getState().users}
          status={store.getState().isFetching}
          errorMessage={store.getState().errorMessage}/>
      </div>
    )
  }
}


export default TestZ