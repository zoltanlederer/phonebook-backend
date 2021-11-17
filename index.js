const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

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

let persons = [
    { 
      "id": 1,
      "name": "Arto Hellass", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/info', (request, response) => {
    const numberOfPeople = persons.length
    const date = new Date()
    const html = `<p>Phonebook has info for ${numberOfPeople} people</p>
    <p>${date}</p>`
    response.send(html)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.filter(person => person.id !== id)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
    if (!body.name) {
        return response.status(400).json({error: 'name missing'})
    }
    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({error: 'name already exists'})
    }
    if (!body.number) {
        return response.status(400).json({error: 'number missing'})
    }
    
    const person = {
        name: body.name,
        number: body.number,
        id: Math.floor(Math.random() * 9999)
    }

    persons = persons.concat(person)
    response.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})