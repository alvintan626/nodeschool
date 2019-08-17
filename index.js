// sudo npm i -g nodemon

const express = require('express')
const app = express()
const port = process.env.PORT || 8000   // process env is good for deployment setup such as using with heroku and aws
const path = require('path')

app.use(express.static('static'))

app.get('/root',(req,res)=>
    res.sendFile(path.join(__dirname, 'static/index.html'))
)

app.listen(port, ()=>
    console.log(`listening on port ${port}`)
)