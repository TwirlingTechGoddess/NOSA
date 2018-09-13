export const cleanPics = (data) => {
  const newData = data.map((pic, index) => {
    return {url: `https://epic.gsfc.nasa.gov/archive/natural/2018/09/11/png/${pic.image}.png`, id: index, text: ''}
  })
  return newData
}