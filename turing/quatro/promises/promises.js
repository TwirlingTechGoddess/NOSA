function testNum(num) {
  if (num < 10) {
    return new Promise((resolve, reject) => {

    Promise.resolve(num + '' + "is less than 10, success!")
    }
  } else {
    Promise.reject(num + '' + "is greater than 10, error!")
  }
}

testNum(5)
  .then(result => console.log(result))
  .catch(error => console.log(error))
// 5 is less than 10, error!

testNum(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))
// 15 is greater than 10, success!

function sortWords(words) {
  return new Promise((resolve, reject) => {
    if(words.every(function(i){ return typeof i === "string" })){
        const newWords = words.map(word => word.toUpercase())
        Promise.resolve(newWords.sort())
    } else{
      Promise.reject('No, the array you passed in contained an element that was not a string!')
    }
  })
}

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
// ['BIRD', 'PANTS', 'WOWOW']

makeAllCaps(['wowow', 5, 'bird'])
  .then(words => sortWords(words))
  .then(result => console.log(result))
  .catch(error => console.log(error))
// 'No, the array you passed in contained an element that was not a string!'