const http = require('http'); 

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        // console.log('Accessing homepage')
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        // console.log('Accessing about')
        res.end('Here is our short history')
    } else {
    res.end(
        `
        <h1>Nothing to see here</h1>
        `
    )}

})

// listen to the server
server.listen(5000)