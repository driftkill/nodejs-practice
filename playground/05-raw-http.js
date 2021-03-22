const http = require('http')
const url = 'http://api.weatherstack.com/current?access_key=7ff1096141c478b1f2fdb44511cd5c1e&query=patna'

const request = http.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()