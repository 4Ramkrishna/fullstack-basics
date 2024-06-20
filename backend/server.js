import express from 'express'

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "joke1",
            content: "What a joke1"
        },
        {
            id: 2,
            title: "joke2",
            content: "What a joke2"
        },
        {
            id: 3,
            title: "joke3",
            content: "What a joke3"
        },
        {
            id: 4,
            title: "joke4",
            content: "What a joke4"
        },
    ]
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
})
