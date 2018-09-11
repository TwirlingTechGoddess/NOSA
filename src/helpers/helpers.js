export const cleanPics = (data) => {
  const newData = data.map((pic, index) => {
    return {url: `https://epic.gsfc.nasa.gov/archive/natural/2018/09/09/png/${pic.image}.png`, id: index}
  })
  return newData
}