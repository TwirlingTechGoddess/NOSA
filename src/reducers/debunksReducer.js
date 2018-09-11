export const debunksReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_PIC' :
      return action.pic;
    default :
      return state
  }
}