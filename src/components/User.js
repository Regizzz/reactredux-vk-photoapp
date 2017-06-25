import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

export default class User extends Component {

  render() {
    const { name, error } = this.props
    let template

    if (name) {
      template = <p>Hi, {name}!</p>
    } else {

      template = <Button className='btn btn-outlined btn-white btn-xs' data-wow-delay='0.7s' onClick={this.props.handleLogin}>Login</Button>
    }

    return <div className='user'>
      {template}
      {error ? <p className='error'> {error}. <br /> Please, try again </p> : ''}
    </div>
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string.isRequired
}
