export const imagesReducer = (state=[], action) => {
  switch (action.type) {
    case 'ADD_IMAGES':
      return action.images;
    default :
      return state
  }
  
}