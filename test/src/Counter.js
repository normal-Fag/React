import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }

      this.plus = this.plus.bind(this);
      this.minus = this.minus.bind(this);
      this.reset = this.reset.bind(this);
    }
    
    plus() {
        this.setState(state => ({
            count: ++state.count
        }))
    }
    minus() {
        this.setState( state => ({
            count: --state.count
        }))
    }
    reset() {
        this.setState({
            count: 0
        })
    }

  render() {
    return (
      <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.plus}>+</button>
          <button onClick={this.minus}>-</button>
          <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}
