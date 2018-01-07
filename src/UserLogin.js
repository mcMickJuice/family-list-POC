import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import Menu, { MenuItem } from 'material-ui/Menu'
import { login, logout } from './redux/user/actions'

const users = ['mike', 'caiden', 'lindsay', 'mom']

class User extends Component {
  constructor() {
    super()

    this.state = {
      isMenuOpen: false
    }

    this.handleMenuToggle = this.handleMenuToggle.bind(this)
    this.handleUserLogin = this.handleUserLogin.bind(this)
  }

  handleMenuToggle() {
    this.setState(state => ({
      isMenuOpen: !state.isMenuOpen
    }))
  }

  handleUserLogin(user) {
    const { login } = this.props

    login(user)

    this.setState({
      isMenuOpen: false
    })
  }

  render() {
    const { user } = this.props
    const { isMenuOpen } = this.state

    return (
      <div>
        <strong onClick={this.handleMenuToggle} ref={el => (this.el = el)}>
          {user}
        </strong>
        <Menu
          anchorEl={this.el}
          open={isMenuOpen}
          onClose={this.handleMenuToggle}
        >
          {users.map(user => {
            return (
              <MenuItem key={user} onClick={() => this.handleUserLogin(user)}>
                {user}
              </MenuItem>
            )
          })}
        </Menu>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout),
    login: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)
