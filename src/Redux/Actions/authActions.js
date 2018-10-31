import axios from 'axios'
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'

export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAILED = 'USER_REGISTER_FAILED'

export const USER_LOGOUT = 'USER_LOGOUT'

export const userLogin = (creds, history) => {
  return async dispatch => {
    

    try {
      let response = await axios.post(`https://young-tundra-99453.herokuapp.com/login`, creds)
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

export const userRegister = (user_name, password, rank, history) => {
  return async dispatch => {
    try {
      let response = await axios.post(`https://young-tundra-99453.herokuapp.com/register`, {user_name, password, rank})
      let newUser = response.data
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: newUser
      })
      history.push('/RegistrationSuccessful')
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAILED,
        payload: err
      })
      history.push('/RegistrationFailed')
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
