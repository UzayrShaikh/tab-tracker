console.log('backend')
const express = require('express')
const bodyParser=require('body-parser')
const cors=require('cors')
const morgan = require('morgan')

const app = express()//builds an express server
app.use(morgan('combined'))
app.use(bodyParser.json())//process json data with ease
app.use(cors())//allow any host to acces this

//This is an express command where get is a method from a list of methods we can use for an http request ,more of which are post
app.get('/status',(req,res)=>{
    res.send({
        message:'hello worlds'
    })
})

app.listen(process.env.PORT || 8081)//listen to all these processes on port 8081