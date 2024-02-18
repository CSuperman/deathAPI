import lifespan from 'lifespan.js'

import express from 'express'
const app = express()
import cors from 'cors'
const PORT = 3333

app.use(cors())


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (request, response) => {
    const ID = request.params.id.toLowerCase()
    if(lifespan[ID]){
        response.json(lifespan[ID])
    }else{
        response.json(lifespan['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Alive on port ${PORT}`)
})













/*

// import category from data.js

const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 3333

app.use(cors())

let category = {
    '21 savage': {
        'age': 28,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthdate': '22 October 1992', 
        'birthLocation': 'London, England',
        'origin': 'Atlanta, Georgia',
        'genre': 'hip hop, trap, rap, horrorcore',
        'occupation': 'rapper, songwriter, record producer',
        'yearsActive': '2013-present',
        'labels': 'Epic, Slaughter Gang',
        'children': 3
    },
    'chance the rapper':{
        'age': 28,
        'birthName': 'Chancelor Jonathan Bennett',
        'birthdate': 'April 16, 1993', 
        'birthLocation': 'London, England',
        'origin': 'Chicago, Illinois',
        'genre': 'hip hop, alternative hip hop, r & b',
        'occupation': 'rapper, singer, song writer, record producer, activist, actor, philanthropist',
        'yearsActive': '2011-present',
        'labels': 'none',
        'children': 0
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthdate': 'unknown', 
        'birthLocation': 'unknown',
        'origin': 'unknown',
        'genre': 'unknown',
        'occupation': 'unknown',
        'yearsActive': 'unknown',
        'labels': 'unknown',
        'children': 'unknown'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:id', (request, response) => {
    const ID = request.params.id.toLowerCase()
    if(category[ID]){
        response.json(category[ID])
    }else{
        response.json(category['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

*/