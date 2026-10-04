import http, {IncomingMessage, ServerResponse} from "node:http"

const PORT = 3001

const server = http.createServer((
    req: IncomingMessage, res:ServerResponse
)=>{
    const method = req.method ?? "GET";

    // http://localhost:3001/users => req.url : /users
    // http://localhost:3001/users?id=1 -> req.url: /users?id=1

    const requestUrl = new URL(req.url ?? "/", `http:${req.headers.host}`)
    const pathname = requestUrl.pathname

    res.setHeader("Content-Type","text/plain")

    if(method==="GET" && pathname==="/health"){
        res.statusCode=200;
        res.end("Server is healthy")
        return
    }
    if(method==="GET" && pathname==="/users"){
        res.statusCode=200;
        res.end("list of users")
        return
    }
    if(method==="POST" && pathname==="/users"){
        res.statusCode=201;
        res.end("users created successfully!!")
        return
    }

    // /gcuvhowh
    res.statusCode=404
    //404- not found
    res.end("route not found");
})

server.listen(PORT,()=>{
    console.log(`Server is now running on port ${PORT}`)
})