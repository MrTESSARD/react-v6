import React, { Component } from 'react'

export default class ClassCount extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }
    componentDidMount() { //s'execute une seule fois
    // console.log("componentDidMount")

    document.title=`vous avez cliqué ${this.state.count} fois`
     }
     componentDidUpdate(prevProps, prevState) {
        document.title=`vous avez cliqué ${this.state.count} fois`

        
     }

  render() {
    return (
      <div>
        <h1 className='text-center'>{this.state.count}</h1>
        {/* <input type="text" value={this.state.name} onChange={e => this.setState({name: e.target.value})  }/> */}

        <button onClick={() => this.setState({count: this.state.count+1})}>Cliquez</button>

      </div>
    )
  }
}
