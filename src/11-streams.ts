// handle data piece by piece
// not loading the data everything once
// read large fles
// uplod files
// downloading files
// video/ audio processing
// compression

import { Readable,Transform, Writable } from "node:stream";
import { pipeline } from "node:stream/promises";

// chuns
// here is my full 500mb file
//here is chunk1
//here is chunk2
//here is chunk3
//here is chunk4
//here is chunk5

// mmeory efficient

//streams types
// readable stream - source of data
// writable stream - destination where the data is written
// transforms stream - read the data, change it and pass that forward

const readableStream = Readable.from([
    "hello ",
    "from ",
    "node.js ",
    "streams"
])

// callback(error, result)
const uppercaseTransform = new Transform({
    transform(chunk, encoding, callback){
        const text = chunk.toString();

        callback(null, text.toUpperCase())
    }
})

const writableStream = new Writable({
    write(chunk, encoding, callback){
        console.log('recieved chunk', chunk.toString());

        callback()
    }
})

async function main(): Promise<void>{
    try{
        await pipeline(readableStream, uppercaseTransform,writableStream)
        console.log("stream completed")
    }catch(error){
        const msg = error instanceof Error ? error.message : "unknown error"
        console.error("stream failed", msg)
    }
}

main()