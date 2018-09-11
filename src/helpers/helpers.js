export const cleanPics = (data) => {
  const newData = data.map((pic, index) => {
    return {url: `https://epic.gsfc.nasa.gov/archive/natural/2015/10/31/png/${pic.image}`, id: index}
  })
  return newData
}