import { FETCH_VOX_DISPATCH_SUCCESS,
         FETCH_VOX_DISPATCH_FAILED,
         DELETE_VOX_DISPATCH_SUCCESS,
         DELETE_VOX_DISPATCH_FAILED,
         UPDATE_VOX_DISPATCH_SUCCESS,
         UPDATE_VOX_DISPATCH_FAILED,
         ADD_VOX_DISPATCH_SUCCESS,
         ADD_VOX_DISPATCH_FAILED,
} from '../Actions/VoxDispatchActions'

  const initialState = []

  export default (state = initialState, action) => {
    switch(action.type) {
      case FETCH_VOX_DISPATCH_SUCCESS:
        return [...action.payload]
      case FETCH_VOX_DISPATCH_FAILED:
        return action.payload
      case ADD_VOX_DISPATCH_SUCCESS:
        return [...state, action.payload]
      case ADD_VOX_DISPATCH_FAILED:
        return action.payload
      case UPDATE_VOX_DISPATCH_SUCCESS:
        return [...state, action.payload]
      case UPDATE_VOX_DISPATCH_FAILED:
        return action.payload
      case DELETE_VOX_DISPATCH_SUCCESS:
          let deletedPost = action.payload
        return state.filter(vox => vox.id !== Number(deletedPost))
      case DELETE_VOX_DISPATCH_FAILED:
        return action.payload
      default:
        return state
    }
  }
