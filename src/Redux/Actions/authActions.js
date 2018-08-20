import axios from 'axios'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (creds, history) => {
  console.log('creds', creds, 'hist',history)

  return async dispatch => {

    try {
      let response = await axios.post(`http://localhost:8000/login`, creds)
      let user = response.data
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: user
      })
      history.push('/Dash')
    } catch (err) {
      dispatch({
        type: USER_LOGIN_FAILED,
        payload: err
      })
      history.push('/LoginFail')
    }
  }
}

export const userRegister = (name, password, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(`http://localhost:3000/api/v1/register`, {name, password})
      let newUser = response.data
      dispatch({
        type: USER_REGISTER_SUCCESS
      })
      history.push('/')
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: err
      })
      history.push('/')
    }
  }
}


export const userLogout = (history) => {
  return dispatch => {
    dispatch({
      type: USER_LOGOUT

    })
    history.push('/')
  }
}
