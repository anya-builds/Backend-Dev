import { log } from "node:console";
import crypto from "node:crypto"

//built in node js module
// security related tasks
// creating random UUId , IDS
//hashing data
// to verify of the data was not changed
// encrypt/decrypt

// crypto.randomUUID
// user id,order id, session id
const requestId = crypto.randomUUID()
console.log(requestId);

// crypto.randomBytes
// password reset feature token
//email verification
//API  , session secrets

//32 char string
const resetToken = crypto.randomBytes(16).toString('hex')
console.log(resetToken);

// crypto.createHash
// hello -> hash
//hash -> hello //not possible

const text= "hello node";
const hash = crypto.createHash('sha256').update(text).digest('hex')
console.log(hash)

// crypto.createHmac
// normal hash: data -> hash
// HMAC: data + secret -> signed hash
// webhook
// signed token
const secret = "my-super-secret-key"
const message = "user_id=1"
const signature=crypto.createHmac('sha256',secret).update(message).digest("hex")
console.log(signature)

const signatureVerify = crypto.createHmac("sha256",secret).update(message).digest('hex')

console.log('signature is valid and matching ', signature===signatureVerify)