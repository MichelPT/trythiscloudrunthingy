const http = require('http')
const server = http.createServer((req, res)=>{
    console.log('New connection')
    res.end('This is the testing page and welcome to the testing page that doesnt actually have any testing since the developer who made this is actually in a pretty tight schedule')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, ()=>console.log('nging...'))
