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

  handleState(e){
    this.setState({msg:event.target.value})
  }
  renderList(list){  
    var items=[]
    for(let i in list){
      console.log(i)
      items.push(<li key={list[i]+i}>{list[i]}</li>)
    }
    return items
  }
  fetchData(){
    // console.log(fetch)
    var myhead = new Headers()
    // myhead.append('Content-Type','application/json')
    myhead.append('Cache-Control', 'no-cache')
    console.log('00')
    return ()=>{
      store.dispatch({type:'FETCHSTART'})
      console.log('11')
      return fetch('//47.104.7.232:3300/memos')
      .then(json=>{
        console.log(json)
        store.dispatch({type:'FETCHDATA',response:json})
      })
      .catch((err)=>{
        store.dispatch({type:'FETCHERROR',errorMessage:err.message})
      })
    }
  }
  render() {
    console.log(this.props)
    console.log(store.getState())
    // const { value, onIncrement, onDecrement } = this.props
    return (
      <div className="test1">
        <p>test1 page</p>
        <p>{this.props.users}</p>
        <ul>
          {this.renderList(this.props.users)}
        </ul>
        <button onClick={this.fetchData().bind(this)}>fetch</button>
        <span>{this.props.status.toString()}</span>
        <span>{this.props.errorMessage}</span>
      </div>
    )
  }
}


export default Test