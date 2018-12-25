import React, { Component } from 'react'
import './App.css'

import { helloWorld } from '../functions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      result: 'loading'
    }
  }

  componentDidMount() {
    console.log(process.env)

    helloWorld().then(result => {
      console.log(result.data)
      this.setState({ result: result.data })
    }).catch(function (error) {
      // Getting the Error details.
      console.log(error.code)
      console.log(error.message)
      console.log(error.details)
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.result}
      </div>
    )
  }
}

export default App
