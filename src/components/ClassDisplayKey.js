import React, { Component } from 'react'

export class ClassDisplayKey extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         keyCode: 5
      }
    }
    handelKeyCode= e=>{
        // console.log(e)

        this.setState({
            keyCode:e.code
        })
    }
    componentDidMount() { 
        document.addEventListener("keyup",this.handelKeyCode )

     }
     componentWillUnmount() {
        console.log("componentWillUnmount arrété ")
        document.removeEventListener("keyup",this.handelKeyCode )

      }
  render() {
    const {keyCode} = this.state
    return (
      <div className='card' >
        <div className='card-body'>
        <h1 className='text-center'>ClassDisplayKey {keyCode} </h1>

            </div> 
            
            </div>
    )
  }
}

export default ClassDisplayKey