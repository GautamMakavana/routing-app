const express = require("express")
const app = express();
const bodyParser = require("body-parser")


  app.use(bodyParser.urlencoded({extended:false}))
const route = require("./router")

const port = 3000;

app.use('/api',route)

app.get('/',(req,res)=>{
    res.end("routing app")

})

app.listen(port,()=>(console.log(`express server currently running on http://localhost:${port}`)))