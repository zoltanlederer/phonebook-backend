const mongoose = require('mongoose')

const password = process.argv[2]
const newName = process.argv[3]
const newNumber = process.argv[4]

const url =
  `mongodb+srv://helsinki:${password}@cluster0.7erj6.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
    name: String,
    number: Number
})

const Person = mongoose.model('Person', personSchema)


if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

if (process.argv.length === 3) {
    Person.find({}).then(result => {
            console.log('Phonebook:');
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`);
        })
        mongoose.connection.close()
    })    
}

if (process.argv.length === 5) {
    const person = new Person({
        name: newName,
        number: newNumber
    })

    person.save().then(result => {
        console.log(`Added ${newName} number ${newNumber} to phonebook`);
        mongoose.connection.close()
    })
}





