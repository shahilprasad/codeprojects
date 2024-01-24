import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

try {
    const conn = await mongoose.connect(process.env.DB_URI)
    console.log(conn.connection.readyState === 1 ? 'MongoDB connected!' : 'MongoDB failed to connect')
}
catch (err) {
    console.error(err)
}

const closeConnection = () => {
    console.log('Mongoose disconnecting ...')
    mongoose.disconnect()
}

const categoriesSchema = new mongoose.Schema({
    name: { type: String, required: true }
})

const CategoryModel = mongoose.model('Category', categoriesSchema)

const entriesSchema = new mongoose.Schema({
    category: { type: String, required: true },
    content: { type: String, required: true }
})

const EntryModel = mongoose.model('Entry', entriesSchema)

export { closeConnection, EntryModel, CategoryModel }