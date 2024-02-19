const death = require('./data.js')

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3333

app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (request, response) => {
    const ID = request.params.id.toLowerCase()
    if(death[ID]){
        response.json(death[ID])
    }else{
        response.json(death['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Alive on port ${PORT}`)
})
