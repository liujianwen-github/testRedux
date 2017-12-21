import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Test from './Test'


class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:"default"
    }
    this.incrementAsync = this.incrementAsync.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.handleUser = this.handleUser.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  incrementIfOdd() {
    if (this.props.value % 2 !== 0) {
      this.props.onIncrement()
    }
  }

  incrementAsync() {
    setTimeout(this.props.onIncrement, 1000)
  }

  handleUser(e){
    console.log(e.target.value)
    let val = e.target.value
    this.setState({userName:val})
  }

  addUser(){
    this.props.addUser(this.state.userName)
  }

  render() {
    // console.log(this.props)
    const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="counter">
        Clicked: {value} times
        {' '}
        <button onClick={onIncrement}>
          +
        </button>
        {' '}
        <button onClick={onDecrement}>
          -
        </button>
        {' '}
        <button onClick={this.incrementIfOdd}>
          Increment if odd
        </button>
        {' '}
        <button onClick={this.incrementAsync}>
          Increment async
        </button>
        <input type="text" value={this.state.userName} onChange={this.handleUser}/>
        <button onClick={this.addUser}>
          adduser
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter