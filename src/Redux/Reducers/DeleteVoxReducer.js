import { DELETE_VOX_DISPATCH_SUCCESS,
         DELETE_VOX_DISPATCH_FAILED
} from '../Actions/VoxDispatchActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
        case DELETE_VOX_DISPATCH_SUCCESS:
          return [...action.payload]
        case DELETE_VOX_DISPATCH_FAILED:
          return action.payload
      default:
        return state
    }
  }
