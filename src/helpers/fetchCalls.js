import { cleanPics } from'./helpers.js'

export const fetchNasaPics = async () => {
  const url = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=cMvzLRdapayFfx4ukaHq3PH104HsmxX4Rd6rZqJ7';
  const response = await fetch(url);
  const data = await response.json()
  const result = await cleanPics(data)
  console.log(result)
  return Promise.all(result)
}
