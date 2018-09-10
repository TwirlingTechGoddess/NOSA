import React, { Component } from 'react'

export default class Login extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login Submit')
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='email' name='email' value={this.state.email} />
          <input onChange={this.handleChange} type='password' name='password' value={this.state.password} />
          <button>Submit</button>
        </form>

      </div>

    )
  }
}
