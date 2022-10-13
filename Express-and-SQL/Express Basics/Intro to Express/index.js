
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from the world')
})
app.listen(5002, ()=> {
    console.log(`Server is listening on port 5002...`)
})