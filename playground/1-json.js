const fs = require('fs')

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //const parsedData = JSON.parse(bookJSON)
// //console.log(parsedData.author)

// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json') // Binary
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)


const me = JSON.parse(fs.readFileSync('1-json.json').toString())
me.name = 'Chunyan'
me.planet = 'Mars'
me.age = 24

console.log(me)

fs.writeFileSync('1-json.json', JSON.stringify(me))
