import React, { Component } from 'react'
import './App.css'

import { timeConverter } from '../functions'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: {
        year: '',
        month: '',
        day: '',
        hour: '',
        minute: '',
        inputTimezone: '',
        desiredTimezone: ''
      },

      response: ''

    }
  }

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state)

    let { input } = this.state

    Object.keys(input).forEach(key => {
      input = {
        ...input,
        [key]: parseInt(input[key])
      }
    })

    const request = {
      inputTimezone: input.inputTimezone,
      desiredTimezone: input.desiredTimezone,
      inputDate: input
    }

    timeConverter(request).then(result => {
      console.log(result)
      const response = result.data
      this.setState({
        response
      })
    }).catch(function (error) {
      // Getting the Error details.
      console.log(error.code)
      console.log(error.message)
      console.log(error.details)
    })

  }

  handleChange = event => {
    const { target } = event
    const { name, value } = target

    this.setState({
      input: {
        ...this.state.input,
        [name]: value
      }
    })
  }

  inputs = [
    'year',
    'month',
    'day',
    'hour',
    'minute',
    'inputTimezone',
    'desiredTimezone'
  ]

  generateInputs = inputs => {
    return inputs.map(input => {
      return (
        <div key={input}>
          <label className="input" htmlFor={input}>{input}</label>
          <input id={input} name={input} type="text" value={this.state.input[input]} onChange={this.handleChange} />
        </div>
      )
    })
  }

  render() {
    const {
      inputs,
      generateInputs,
      handleSubmit
    } = this

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          {generateInputs(inputs)}
          <div>
            <input type="submit" />
          </div>
        </form>
        <div>
          {JSON.stringify(this.state.response)}
        </div>
      </div>
    )
  }
}

export default App
