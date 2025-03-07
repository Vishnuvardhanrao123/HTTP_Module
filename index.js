const http=require("http")
const fs=require("fs")
const { error } = require("console")
const log=console.log
const server=http.createServer((req,res)=>{
   fs.readFile("index.html","utf-8",(err,data)=>{
    if(err) throw error
    else{
        res.write(data)
        res.end()

        }

   })
})
server.listen(3000,()=>{
    log(`server runing  http://localhost:3000`)
})
