const express = require('express');
const app = require('./app');

const port = 3001
// const hostname = localhost

app.listen(port, () => {
    console.log(`App running at  ${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello - Aplication Clima Tempo')
})