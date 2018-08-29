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
      axios.get('http://localhost:8000/field_reports/')
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
        axios.get('http://localhost:8000/users/')
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
    console.log('still working', case_number)
    axios.post(`http://localhost:8000/file_search/`, {case_number})
    .then(res=> dispatch({
      type: FETCH_CASE_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
    // .catch(err => dispatch({
    //   type: FETCH_CASE_REPORT_FAILED,
    //   payload: err
    // }))
  }
}

export const fetchNameReport = (name, history) => {
  console.log('working', name, history)
  return dispatch => {
    console.log('still working', name)
    axios.post(`http://localhost:8000/name_search/`, {name})
    .then(res=> dispatch({
      type: FETCH_NAME_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
    // .catch(err => dispatch({
    //   type: FETCH_NAME_REPORT_FAILED,
    //   payload: err
    // }))
  }
}

// export const fetchNameReport = (name, history) => {
//     console.log('fire 2', name, history)
//     return async dispatch => {
//       try{
//         dispatch({type: CASE_QUERRY_PENDING})
//       console.log('im in the dispatch!')
//       let res = axios.post(`http://localhost:8000/name_search/`, {name})
//       let userObj = await res.json()
//       dispatch({
//         type: FETCH_NAME_REPORT_SUCCESS,
//         payload: userObj.data
//       })
//       history.push(`/Serach_Results`)
//     }catch(err){
//      dispatch({
//         type: FETCH_NAME_REPORT_FAILED,
//         payload: err
//       })
//     }
//   }
// }

export const fetchLocationReport = (location, history) => {
  console.log('working', location)
  return dispatch => {
    console.log('still working', location)
    axios.post(`http://localhost:8000/location_search/`, {location})
    .then(res=> dispatch({
      type: FETCH_LOCATION_REPORT_SUCCESS,
      payload: res.data
    }))
    history.push(`/Search_Results`)
    // .catch(err => dispatch({
    //   type: FETCH_LOCATION_REPORT_FAILED,
    //   payload: err
    // }))
  }
}
