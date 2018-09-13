export const debunksReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_DEBUNKS' :
      return action.pic;
    default :
      return state
  }
}