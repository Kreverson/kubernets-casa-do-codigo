const http = require('http')

const server = http.createServer((req,res) => {
    res.write('Hello word')
    res.end()
})

server.listen(process.env.PORT)
console.log(`Ouvindo na porta ${process.env.PORT}`)