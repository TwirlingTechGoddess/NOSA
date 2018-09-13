import { debunksReducer } from '../debunksReducer'

describe('debunksReducer', () => {

  it('should return the initial state', () => {
    const expected = []
    const result = debunksReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a new state with an array of edited pics', () => {
    const mockState = []
    const mockAction = {
      type: 'ADD_DEBUNKS',
      pic: [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
    };
    const expected = [{url: 'https://epic.gsfc.nasa.gov.png', id: 3, text: ''}]
    const result = debunksReducer(mockState, mockAction);
    expect(result).toEqual(expected)
  })
})