import {
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAILED,
  USER_LOGOUT
} from '../Actions/authActions'

let initialState = {
  user: {},
  err: {},
  isAuthed: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      localStorage.setItem('user_name', JSON.stringify(action.payload.user.user_name))
      localStorage.setItem('token', JSON.stringify(action.payload.token))
      localStorage.setItem('admin', JSON.stringify(action.payload.user.isAdmin))
      localStorage.setItem('rank', JSON.stringify(action.payload.user.rank))
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
      case USER_REGISTER_SUCCESS:
      return state
    case USER_REGISTER_FAILED:
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
