// sudo npm i -g nodemon

const express = require('express')
const app = express()
const port = process.env.PORT || 8000   // process env is good for deployment setup such as using with heroku and aws
const path = require('path')
const bodyParser = require('body-parser')
app.use(express.static('static'))
    app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>
    res.sendFile(path.join(__dirname, 'static/index.html'))
)

app.post('/tweet', (req,res)=>{
    console.log(req.body.tweet)
    res.redirect('/')
})


app.listen(port, ()=>
    console.log(`listening on port ${port}`)
)