const fs = require('fs')
// const people = {
//     name: 'Someone',
//     planet: 'Earth',
//     Age: 30
// }

// peopleJSON = JSON.stringify(people)
// fs.writeFileSync('1-json.json', peopleJSON)

const peopleBuffer = fs.readFileSync('1-json.json')
var peopleJSON = peopleBuffer.toString()
const people = JSON.parse(peopleJSON)

people.name = 'Vishal'
people.age = 27

peopleJSON = JSON.stringify(people)
fs.writeFileSync('1-json.json', peopleJSON)
