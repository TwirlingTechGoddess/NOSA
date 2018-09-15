export const cleanPics = (data) => {
  const newData = data.map((pic, index) => {
    const year = pic.date.split('')
    const month = year.splice(4)
    const date = month.splice(3)
    date.splice(3)
    month.shift()
    date.shift()
    return {url: `https://epic.gsfc.nasa.gov/archive/natural/${year.join([])}/${month.join([])}/${date.join([])}/png/${pic.image}.png`, id: index, text: ''}
  })
  return newData
}