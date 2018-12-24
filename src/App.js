import React, { Component } from 'react'
import './App.css'

import firebase from 'firebase/app'
import 'firebase/functions'

class App extends Component {
  constructor(props) {
    super(props)

    this.app = firebase.initializeApp({
      projectId: 'event-converter'
    })
    if (process.env.NODE_ENV === "development") {
      this.app.functions().useFunctionsEmulator('http://localhost:5000');
    }

    this.state = {
      result: 'loading'
    }
  }

  componentDidMount() {
    console.log(process.env)

    const helloWorld = this.app.functions().httpsCallable('v1/')
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
