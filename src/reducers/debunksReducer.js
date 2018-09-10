export const debunksReducer = (state={}, action) => {
  switch (action.type) {
    case 'DEBUNKED_PIC' :
      return action.newPics;
    default :
      return state
  }
}