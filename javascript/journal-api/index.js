import express from 'express'

const categories = ['Food', 'Coding', 'Sports', 'Other']

const entries = [
    { category: 'Food', content: 'Pizza' },
    { category: 'Coding', content: 'JavaScript' },
    { category: 'Sports', content: 'Soccer' },
    { category: 'Other', content: 'Sleeping' }
]

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send({ info: 'Journal API' }))

app.get('/categories', (req, res) => res.status(201).send(categories))

app.get('/entries', (req, res) => res.status(201).send(entries))

app.get('/entries/:id', (req, res) => {
    const entry = entries[req.params.id - 1]
    if (entry) {
        res.send(entry)
    } else {
        res.status(404).send({ error: 'Entry not found' })
    }
})

app.post('/entries', (req, res) => {
    // Get entry data from the request
    console.log(req.body)
    // Validate
    // Create a new entry object
    // Push the entry to the array
    entries.push(req.body)
    // Respond with 201 and the created entry
    res.status(201).send(entries[entries.length - 1])
})

app.listen(4001)
