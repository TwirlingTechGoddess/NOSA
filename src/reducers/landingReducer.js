export const landingReducer = (state=[], action) => {
  switch (action.type) {
    case 'IMPORT_PICS':
      return action.pics;
    default :
      return state
  }
  
}