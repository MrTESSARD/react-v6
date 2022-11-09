import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         counter:0
      }
    }
    addOne=()=>{
this.setState(pervState=>{
    return{

        counter:pervState.counter+1
    }
})

    }
  render() {
    return (
      <div>ClassState : {this.state.counter}
      <button onClick={this.addOne}>State dans Class</button>
        
      </div>
    )
  }
}

