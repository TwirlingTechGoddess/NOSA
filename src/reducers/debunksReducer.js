export const debunksReducer = (state=[], action) => {
  switch (action.type) {
    case 'DEBUNKED_PIC' :
      return action.images;
    default :
      return state
  }
}