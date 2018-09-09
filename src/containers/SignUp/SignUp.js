import React, { Component } from 'react'

export default class SignUp extends Component{
  constructor(){
    super()
    this.state = {
      name: ''
      email: '',
      password: ''
    }
  }

  handleChange (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) => {
    event.preventDefault();
    console.log('SignUp Submit')
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='name' name='name' value={this.state.name} />
          <input onChange={this.handleChange} type='email' name='email' value={this.state.email} />
          <input onChange={this.handleChange} type='password' name='password' value={this.state.password} />
          <button>Submit</button>
        </form>

      </div>

    )
  }
}
