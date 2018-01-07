import { LOGOUT, LOGIN } from './constants'

export const logout = dispatch => {
  return dispatch({
    type: LOGOUT
  })
}

export const login = user => dispatch => {
  return dispatch({
    type: LOGIN,
    payload: {
      user: user
    }
  })
}
