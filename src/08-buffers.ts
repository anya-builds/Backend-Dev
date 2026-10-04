// buffers - raw binary data
// binary data means - when u have ur data stored in bytes

// reading files
//receiving http req bodies
// working with streams
// handling images, pdf files, videos
// encrypt and hashing

// string- human readaable text

const textBuffer = Buffer.from("Node")
console.log(textBuffer)

console.log(textBuffer.toString("utf-8"))

const engBuffer = Buffer.from("hello")
console.log(Buffer.length)

// .allc
const fixedBuffer = Buffer.alloc(5)
console.log("empty fixed buffer", textBuffer)

// write
fixedBuffer.write("API")
console.log("fixed buffer fter write", fixedBuffer)

console.log("fixed buffer as text", fixedBuffer.toString("utf-8"))

// chunks

const chunks = [
    Buffer.from("hello "),
    Buffer.from("Node "),
    Buffer.from("JS")
]

const combinedBuffer = Buffer.concat(chunks)
console.log(combinedBuffer, combinedBuffer.toString("utf-8"))