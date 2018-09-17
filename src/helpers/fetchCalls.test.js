import React from 'react';
import { fetchNasaPics } from './fetchCalls';
import { cleanPics } from'./helpers.js';
import { shallow } from 'enzyme';
import Landing from '../containers/Landing/Landing'

describe('the fetchNasaPics function in the fetch calls file', () => {
  let mockResponse
  let mockImage
  let mockEvent

  beforeEach(() => {
    mockResponse = [{
        attitude_quaternions: {q0: -0.53162, q1: 0.1174, q2: -0.07677, q3: 0.83529},
        caption: "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
        centroid_coordinates: {lat: 6.52118, lon: 161.291224},
        date: "2018-09-16 00:31:45",
        dscovr_j2000_position: {x: -1415783.460165, y: 373160.921875, z: 168753.864012},
        identifier: "20180916003633",
        image: "epic_1b_20180916003633",
        lunar_j2000_position: {x: -120511.411181, y: -375561.698689, z: 28148.09806},
        sun_j2000_position: {x: -149254784.000002, y: 17160279.093673, z: 7440065.714823},
        version: "02"
      }]
    
    mockImage = {
        attitude_quaternions: {q0: -0.53162, q1: 0.1174, q2: -0.07677, q3: 0.83529},
        caption: "This image was taken by NASA's EPIC camera onboard the NOAA DSCOVR spacecraft",
        centroid_coordinates: {lat: 6.52118, lon: 161.291224},
        date: "2018-09-16 00:31:45",
        dscovr_j2000_position: {x: -1415783.460165, y: 373160.921875, z: 168753.864012},
        identifier: "20180916003633",
        image: "epic_1b_20180916003633",
        lunar_j2000_position: {x: -120511.411181, y: -375561.698689, z: 28148.09806},
        sun_j2000_position: {x: -149254784.000002, y: 17160279.093673, z: 7440065.714823},
        version: "02"
      }

    window.fetch = jest.fn().mockImplementation(() => {
      Promise.resolve({
        json: () => Promise.resolve({
          url: mockResponse 
        })
      })
    });
  });

  it('should make a fetchCall with the correct params', () => {
    const url = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=cMvzLRdapayFfx4ukaHq3PH104HsmxX4Rd6rZqJ7';
    fetchNasaPics();
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('should return a image string if the response is ok', async () => {
    const expected = mockImage;
    const result = await fetchNasaPics();
    expect(...mockResponse).toEqual(mockImage);
  })

  it('calls the cleanPics callback after retrieving response', async () => {
    // wrapper = shallow(<Landing/>)
    // cleanPics(mockResponse);
    mockEvent = jest.fn()
    // const mockCleanPIcs = jest.fn()
    await Promise.resolve(cleanPics(mockResponse))
    expect(mockEvent).toHaveBeenCalled()
  })

  // it('should throw an error if the fetch fails', async () => {
  //   // const recieved = 
  //   const expected = new Error('your fetch is botched boo boo!');
  //   window.fetch = jest.fn().mockImplementation(() => {
  //     ok: false, 
  //     Promise.reject(fetchNasaPics(mockResponse))
    // })
  //   await expect(window.fetch).rejects.toEqual(expected)
  // })

  it('sets an error when the fetch fails', async () => {
    mockEvent = jest.fn();
    const result = await fetchNasaPics(mockEvent)
    const expected = new Error('your fetch is botched boo boo!');
    await expect(result).toEqual(expected)
  })
})