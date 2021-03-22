// const { json, response } = require('express')
const { response } = require('express')
const express = require('express')
const Datastore = require('nedb')
const app = express()
app.listen(3010, () => console.log('listening on port 3010'))
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))

const database = new Datastore('database.db')
database.loadDatabase()

app.get('/api', (req, res) => {
    database.find({}, (err, data) => {
        if (err) {
            res.end()
            return
        }
        res.json(data)
    })
})

app.post('/api', (req, res) => {
    console.log('got new request')
    const data = req.body
    const timestamp = Date.now()
    data.timestamp = timestamp
    database.insert(data)
    res.json(data)
})