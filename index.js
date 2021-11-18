require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))


morgan.token('postedData', (request) => {
    if (request.method === 'POST') {
        return JSON.stringify(request.body)
    }
})

app.use(
    morgan(
        ':method :url :status  :res[content-length] - :response-time ms :postedData'
    )
)

// let persons = [
//     { 
//       "id": 1,
//       "name": "Arto Hellass", 
//       "number": "040-123456"
//     },
//     { 
//       "id": 2,
//       "name": "Ada Lovelace", 
//       "number": "39-44-5323523"
//     },
//     { 
//       "id": 3,
//       "name": "Dan Abramov", 
//       "number": "12-43-234345"
//     },
//     { 
//       "id": 4,
//       "name": "Mary Poppendieck", 
//       "number": "39-23-6423122"
//     }
// ]

app.get('/api/persons', (request, response) => {
    Person.find({}).then(person => {
        response.json(person)    
    })
})

app.get('/info', (request, response) => {
    const numberOfPeople = persons.length
    const date = new Date()
    const html = `<p>Phonebook has info for ${numberOfPeople} people</p>
    <p>${date}</p>`
    response.send(html)
})

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)    
            } else {
                response.status(404).end()
            }            
        })
        .catch(error => next(error))
    // const id = Number(request.params.id)
    // const person = persons.find(person => person.id === id)

    // if (person) {
    //     response.json(person)
    // } else {
    //     response.status(404).end()
    // }
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
    // const id = Number(request.params.id)
    // const person = persons.filter(person => person.id !== id)
    // response.status(204).end()
})


app.post('/api/persons', (request, response) => {
    const body = request.body
    // if (!body.name === undefined) {
    //     return response.status(400).json({error: 'name missing'})
    // }
    // if (persons.find(person => person.name === body.name)) {
    //     return response.status(400).json({error: 'name already exists'})
    // }
    // if (!body.number) {
    //     return response.status(400).json({error: 'number missing'})
    // }
    
    const person = new Person({
        name: body.name,
        number: body.number,
        // id: Math.floor(Math.random() * 9999)
    })
    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
    // persons = persons.concat(person)
    // response.json(person)
})

app.put('/api/persons/:id', (request, response, next) => {
    console.log(request.params.id)
    const body = request.body

    const person = {
        name: body.content,
        number: body.number
    }

    Person.findByIdAndUpdate(request.params.id, person, {new: true})
        .then(updatePerson => {
            response.json(updatePerson)
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.log(error.message);
    if (error.name === 'CastError') {
        return response.status(400).send({error: 'malformatted id'})
    }
    next(error)
}

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
}
  
app.use(unknownEndpoint)

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})