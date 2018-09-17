import React from 'react';
import { cleanPics } from'./helpers.js'

describe('cleanPics funtion in the helpers file', () => {
  it("should return the image object with the proper keys and values", () => {
    const mockResponse = [{
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
    const mockImage = {"id": 0, "text": "", "url": "https://epic.gsfc.nasa.gov/archive/natural/2018/09/16/png/epic_1b_20180916003633.png"}

    const result = cleanPics(mockResponse)
    expect(...result).toEqual(mockImage);
  })
})