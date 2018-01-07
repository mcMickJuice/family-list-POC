import { LOGOUT, LOGIN } from './constants'

const defaultState = {
  user: 'Mike'
}

const user = (state = defaultState, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {
        user: ''
      }
    }
    case LOGIN: {
      return {
        user: action.payload.user
      }
    }
    default: {
      return state
    }
  }
}

export default user
