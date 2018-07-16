import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT
} from './actions'

let initialState = {
  user: {},
  err: {},
  isAuthed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('user', JSON.stringify(action.payload.user))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      return {
        ...state,
        user: action.payload,
        isAuthed: true
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        err: action.payload
      }
    case USER_LOGOUT:
    localStorage.clear()
      return {
        ...initialState
      }
    default:
      return state
  }
}
