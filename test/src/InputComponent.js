import React, { Component } from 'react'

export default class  extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         input: ''
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            input: event.target.value
        })
    }

  render() {
    return (
      <div>
          <input></input>
          <h5>Controlled Input: </h5>
      </div>
    )
  }
}
