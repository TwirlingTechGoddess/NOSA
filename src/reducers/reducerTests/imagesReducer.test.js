import { imagesReducer } from '../imagesReducer';

describe ('imagesReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = imagesReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return new state with an array of images', () => {
    const mockState = [];
    const mockAction = {
      type: 'ADD_IMAGES',
      images: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
    };
    const expected = [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
    const result = imagesReducer(mockState, mockAction)
    expect(result).toEqual(expected)
  })
})