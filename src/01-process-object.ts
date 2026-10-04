// env variables
// coommadn line arguments
// exit code 
// process life cycle events

// read backend port from env files

// read secrets - db urls, api keys, passowrd, google auth secret
// read cLI arguments in scripts

// process.env

import process from 'node:process'
//dotenv
const nodeEnv = process.env.NODE_env ?? "development"

// process.env values are always string or undefined
// cons
// t port = Number(process.env.PORT ?? 3000)

// process.argv ->

// [
//    "/path/tp/node",
//    "src/01-process-object.ts,
//    "start" 
// ]

const command = process.argv[2] ?? "start";

// fail flag
// crash flag

const shouldFail = process.argv.includes("--fail")
const shouldCrash = process.argv.includes("--crash")

//do not start async here
//node js is already shutting down
process.on("exit",(code)=>{
    console.log(`Process finished with exit code ${code}`)
})

function runApp():void{
    console.log({
        command,
    });
    if(shouldFail){
        console.error("manual failure triggered with --fail flag");
        process.exit(1);
    }
    if(shouldCrash){
        console.error("Manual crash triggered with --crash flag");
        process.exit(1);
    }
}
runApp();