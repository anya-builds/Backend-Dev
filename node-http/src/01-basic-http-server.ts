import http, {IncomingMessage, ServerResponse} from 'node:http'

const PORT = 3000;

// http.createServer create low level http servercallback is going to run for every incoming http req

// req-> request object
// method - get, post, put, options, delete
// / , /users
// headers - GamepadHapticActuator; metadata sent by the client
// req body -< data post/put
// req body -> data post/put

// res -> response object
// status code , response Headers, response  body

const server = http.createServer((req:IncomingMessage, res:ServerResponse)=>{
    const method = req.method;

    // get -> read data
    //pots-> create data
    //put->replace data
    // patch -> update partial data
    // delete -> delete the data

    const url = req.url;
    // in which path the client is actually requesting

    const userAgent = req.headers["user-agent"]

    res.statusCode = 200
    //set http status code 
    // 200 - req is successfull


    res.setHeader('Content-Type','text/plain')


    res.end(`Basic http node server: ${method}: ${url}: ${userAgent}`)
})

server.listen(PORT, ()=>{
    console.log(`Server is now running on port ${PORT}`)
})