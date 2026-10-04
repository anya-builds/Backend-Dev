import { error } from "node:console";
import { resolve } from "node:dns";

type User = {
    id: number;
    name: string;
    role: "user" | "super-admin"

}

const users : User[]=[
    {
      id: 1,
      name: "ankita",
      role: 'super-admin'  
    },
    {
        id:2,
        name:"lavanya",
        role:'user'
    },
    {
        id:3,
        name:"keerthi",
        role:'user'
    }
]

// callback is a fucntion - this functin u are passing to a diff function
//callback (error,result)-> *** imp concepts-> classic nodejs pattern
function findUserWithCallback(
    userId: number,
    callback: (error: Error | null, user?: User)=> void
): void {
    setTimeout(()=>{
        // u are actually api call
        const user = users.find(currentUser=> currentUser.id===userId)

        if(!user){
            callback(new Error(`user with id ${userId} was not found`))
            return;
        }
        callback(null, user)
    },500)
}

function findUserWithPromise(userId: number): Promise<User>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const user= users.find((currentUser)=>currentUser.id===userId)
            if(!user){
                reject(new Error(`user with ${userId} data was not found`))
                return;
            }
            resolve(user)
        },1000)
    })
}

async function findUserWithAsyncAwait(userId: number): Promise<void>{
    try{
        const user = await findUserWithPromise(userId)
        console.log('async/await', user.name)
    }catch(error){
        const message = error instanceof Error ? error.message : 'unknown'
        console.log('async/await', message)
    }
}

// findUserWithCallback(30,(error,user)=>{
//     if(error){
//         console.log('callback error', error.message);
//         return;
//     }
//     console.log("callback result", user?.id, user?.name, user?.role);
// })

// findUserWithPromise(1).then((user)=>{
//     console.log("Promise result", user?.id, user?.name, user?.role);
// }).catch((error: Error)=>{
//     console.log("promise error", error.message);
// })

findUserWithAsyncAwait(100);