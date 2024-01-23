import express from 'express'
import mongoose from 'mongoose'

const categories = ['Food', 'Coding', 'Sports', 'Other']

const entries = [
    { category: 'Food', content: 'Pizza' },
    { category: 'Coding', content: 'JavaScript' },
    { category: 'Sports', content: 'Soccer' },
    { category: 'Other', content: 'Sleeping' }
]

mongoose.connect('')
    .then(conn => console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect'))
    .catch(err => console.error(err))

const entriesSchema = new mongoose.Schema({
    category: { type: String, required: true },
    content: { type: String, required: true }
})

const EntryModel = mongoose.model('Entry', entriesSchema)

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

app.post('/entries', async (req, res) => {
    try {
    // Get entry data from the request
    // console.log(req.body)
    // Validate
    // Create a new entry object
    // Push the entry to the array
    // entries.push(req.body)
    const insertedEntry =  await EntryModel.create(req.body)
    // Respond with 201 and the created entry
    res.status(201).send(insertedEntry)
    }
    catch (err) {
        res.status(400).send({ error: err.message })
    }
})

app.listen(4001)
