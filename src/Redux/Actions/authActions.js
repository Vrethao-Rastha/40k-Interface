import axios from 'axios'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (creds, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(`http://localhost:8000/auth/login`, creds)
      let user = response.data
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      })
      history.push('/dashboard')
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
      history.push('/')
    }
  }
}


export const userLogout = () => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT
    })
    history.push('/')  }
}
