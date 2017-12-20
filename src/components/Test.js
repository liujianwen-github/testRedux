import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {store} from '../stores/store'
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg:store.getState()
    }
  }


  render() {
    console.log(this.props)
    // const { value, onIncrement, onDecrement } = this.props
    return (
      <div>
        <p>{this.state.msg}</p>
      </div>
    )
  }
}


export default Test