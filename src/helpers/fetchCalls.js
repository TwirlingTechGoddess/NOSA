export const fetchNasaPics = async () => {
  const url = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=cMvzLRdapayFfx4ukaHq3PH104HsmxX4Rd6rZqJ7';
  const response = await fetch(url);
  const data = await response.json()
  const newData = await data.map(pic => pic.image)
  return Promise.all(newData)
}
