import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import FormInput from '../FormInput/FormInput.jsx'

class Login extends Component {
  handleChange(event) {
    this.setState({email: event.target.value.toLowerCase()});
  }
  handleSubmit(e) {
    e.preventDefault()

    if(! this.state.email) {
      e.preventDefault()
      alert('Vul je e-mailadres in')
    }

    Meteor.call('users.sendLoginEmail', this.state.email, (err, res) => {
      console.log(err, res);
      if(err) {
        alert(err.error)
        return
      }
    })
  }
  render() {
    if(this.props.user) {
      return <div>
        Je bent ingelogd :)
      </div>
    }
    return (
      <form
        onSubmit={this.handleSubmit.bind(this)}
        className="p-4"
        >

        <FormInput
          label="E-mailadres"
          type="email"
          required="required"
          placeholder="you@example.com"
          onChange={this.handleChange.bind(this)}
          />

        <button
          type="submit"
          className="
            cursor-pointer
            bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
          "
          >
          Login
        </button>

      </form>
    )
  }
}

export default withTracker((props) => {
  return {
    user: Meteor.user()
  }
})(Login);
