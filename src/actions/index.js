export const addImages = (images) => {
  return {
    type: 'ADD_IMAGES',
    images
  };
};

export const addDebunks = (pic) => {
  return {
    type: 'ADD_DEBUNKS',
    pic
  }
}