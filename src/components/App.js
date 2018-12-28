import React, { Component } from 'react'
import './App.css'

import { helloWorld } from '../functions'

class App extends Component {
  constructor(props) {
    super(props)



    this.state = {
      result: 'loading',

      input: {
        year: '2018',
        month: '12',
        day: '27',
        hour: '14',
        minute: '16',
        inputTimezone: '-5',
        desiredTimezone: ''
      },

      response: ''

    }
  }

  componentDidMount() {
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

  handleSubmit = event => {
    event.preventDefault()

    console.log(this.state)

    // const input = Object.keys(this.state.input).map(element => parseInt(this.state.input[element]))
    // const {
    //   inputTimezone,
    //   desiredTimezone
    // } = input
    // delete input.inputTimezone
    // delete input.desiredTimezone

    // const request = {
    //   data: {
    //     inputTimezone,
    //     desiredTimezone,
    //     inputDate: input
    //   }
    // }

    const response = {
      "resultTimezone": 11,
      "resultDate": {
        "year": 2018,
        "month": 12,
        "day": 7,
        "hour": 23,
        "minute": 30
      }
    }

    this.setState({
      response
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
        {this.state.result}
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="code input">
            <input className="code" type="text" name="year" size="4" value={this.state.input.year} onChange={this.handleChange} />
            /
            <input className="code" type="text" name="month" size="2" value={this.state.input.month} onChange={this.handleChange} />
            /
            <input className="code" type="text" name="day" size="2" value={this.state.input.day} onChange={this.handleChange} />
            <span> </span>
            <input className="code" type="text" name="hour" size="2" value={this.state.input.hour} onChange={this.handleChange} />
            :
            <input className="code" type="text" name="minute" size="2" value={this.state.input.minute} onChange={this.handleChange} />
            <span> GMT</span>
            <input className="code" type="text" name="inputTimezone" size="3" value={this.state.input.inputTimezone} onChange={this.handleChange} />
          </div>
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
