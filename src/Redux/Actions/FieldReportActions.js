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

export const FETCH_INFORMATION_REPORT_SUCCESS =  'FETCH_INFORMATION_REPORT_SUCCESS'
export const FETCH_INFORMATION_REPORT_FAILED =  'FETCH_INFORMATION_REPORT_FAILED'

export const FETCH_GLOSSARY_REPORT_SUCCESS =  'FETCH_GLOSSARY_REPORT_SUCCESS'
export const CLEAR_GLOSSARY_REPORT_SUCCESS =  'CLEAR_GLOSSARY_REPORT_SUCCESS'



export const CASE_QUERRY_PENDING = 'CASE_QUERRY_PENDING'

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

export const fetchNameReport = (first_name, last_name, history) => {
  return dispatch => {    
    axios.post(`https://young-tundra-99453.herokuapp.com/name_search/`, {first_name, last_name})
    .then(res => dispatch({
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
    //history.push(`/Dash`)
  }
}

export const fetchInformationReport = (Title, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/information_search/`, {Title})
    .then(res=> dispatch({
      type: FETCH_INFORMATION_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}

export const clearInformationReport = (Title, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/information_search/`, {Title})
    .then(res=> dispatch({
      type: FETCH_INFORMATION_REPORT_SUCCESS,
      payload: res.data
    }))
    //history.push(`/Dash`)
  }
}

export const fetchGlossaryReport = (Title, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/glossary_search/`, {Title})
    .then(res=> dispatch({
      type: FETCH_GLOSSARY_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}

export const clearGlossaryReport = (Title, history) => {
  return dispatch => {
    axios.post(`https://young-tundra-99453.herokuapp.com/glossary_search/`, {Title})
    .then(res=> dispatch({
      type: CLEAR_GLOSSARY_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
  }
}
