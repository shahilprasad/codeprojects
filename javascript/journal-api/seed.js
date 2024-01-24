import { EntryModel } from "./db.js";

const entries = [
    { category: 'Food', content: 'Pizza' },
    { category: 'Coding', content: 'JavaScript' },
    { category: 'Sports', content: 'Soccer' },
    { category: 'Other', content: 'Sleeping' }
]
await EntryModel.deleteMany()
console.log('Deleted all entries')