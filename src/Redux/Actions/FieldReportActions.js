import axios from 'axios'

export const FETCH_FIELD_REPORTS_SUCCESS = 'FETCH_FIELD_REPORTS_SUCCESS'
export const FETCH_FIELD_REPORTS_FAILED =  'FETCH_FIELD_REPORTS_FAILED'

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS'
export const FETCH_USER_FAILED = 'FETCH_USER_FAILED'


export const FETCH_NAME_REPORT_SUCCESS =  'FETCH_NAME_REPORT_SUCCESS'
export const FETCH_NAME_REPORT_FAILED =  'FETCH_NAME_REPORT_FAILED'
export const FETCH_CASE_REPORT_SUCCESS =  'FETCH_CASE_REPORT_SUCCESS'
export const FETCH_CASE_REPORT_FAILED =  'FETCH_CASE_REPORT_FAILED'
export const FETCH_LOCATION_REPORT_SUCCESS =  'FETCH_LOCATION_REPORT_SUCCESS'
export const FETCH_LOCATION_REPORT_FAILED =  'FETCH_LOCATION_REPORT_FAILED'

export const CASE_QUERRY_PENDING = 'CASE_QUERRY_PENDING'

export const fetchFieldReports = () => {
    return dispatch => {
      axios.get('https://young-tundra-99453.herokuapp.com/field_reports/')
      .then(res => dispatch({
        type: FETCH_FIELD_REPORTS_SUCCESS,
        payload: res.data
      }))
      .catch(err => dispatch({
        type: FETCH_FIELD_REPORTS_FAILED,
        payload: err
      }))
    }
  }

  export const fetchUser = () => {
      return dispatch => {
        axios.get('https://young-tundra-99453.herokuapp.com/users/')
        .then(res => dispatch({
          type: FETCH_USER_SUCCESS,
          payload: res.data
        }))
        .catch(err => dispatch({
          type: FETCH_USER_FAILED,
          payload: err
        }))
      }
    }

export const fetchCaseReport = (case_number, history) => {
  return async dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/file_search/`, {case_number})
    .then(res=> dispatch({
      type: FETCH_CASE_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}

export const clearCaseReport = (case_number, history) => {
  return async dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/file_search/`, {case_number})
    .then(res=> dispatch({
      type: FETCH_CASE_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Dash`)
  }
}

export const fetchNameReport = (name, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/name_search/`, {name})
    .then(res=> dispatch({
      type: FETCH_NAME_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}

export const clearNameReport = (name, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/name_search/`, {name})
    .then(res=> dispatch({
      type: FETCH_NAME_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Dash`)
  }
}

export const fetchLocationReport = (location, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/location_search/`, {location})
    .then(res=> dispatch({
      type: FETCH_LOCATION_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}

export const clearLocationReport = (location, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/location_search/`, {location})
    .then(res=> dispatch({
      type: FETCH_LOCATION_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Dash`)
  }
}
