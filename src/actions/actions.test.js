import * as actions from '../actions';

describe('actions', () => {

  it('should display an image', () => {
    const images = {url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''};
    const expected = {
      type: 'ADD_IMAGES',
      images: {url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}
    };
    const result = actions.addImages(images);
    expect(result).toEqual(expected)
  })

  it('should add a debunked photo to the store', () => {
    const pic = {url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''};
    const expected = {
      type: 'ADD_DEBUNKS',
      pic: {url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}
    }
    const result = actions.addDebunks(pic)
    expect(result).toEqual(expected)
  })

})