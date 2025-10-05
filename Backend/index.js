// // // // // import add from "./math.js"
 
// // // // //  console.log("hello ");
// // // // // const val=   add(1,4)

// // // // // console.log(val);

// // // // //  //common js 


// // // // // import ./

// // // // import { log } from "console"
// // // // import fs from "fs"

// // // // // fs.writeFileSync("text2.txt", "hello world ")
// // // // //sync 

// // // // // fs.writeFile("text3.txt", "hello world ", (err)=>{
// // // // // console.log(err);

// // // // // })

// // // // // fs.readFile("text3.txt","utf-8",  (err, data)=>{
// // // // // if(err) {
// // // // //     console.log(err)
// // // // //     return ;
// // // // // }
// // // // // console.log(data);

// // // // // })

// // // // //  let vl=   fs.readFileSync("text2.txt", "utf-8")

// // // //     // crud 
// // // //     // update 
// // // //      // add on 
// // // //      // replace 

// // // //      //append 

// // // // //      fs.appendFile("text2.txt", "\n and dice ", ()=>{})

// // // // //      fs.writeFile("text2.txt", "nodejs", (err)=>{
// // // // // console.log(err);

// // // // // })

// // // // //unlink , unlinkSync 
    
// // // // // fs.unlink("text2.txt", (err, data )=>{
// // // // // if(err) {
// // // // //     console.log(err);
// // // // //     return ;
    
// // // // // }

// // // // // console.log("file deleted ");

// // // // // })

// // // // // mkdir 

// // // // fs.mkdir("assets", (err)=>{
// // // // if(err) console.log(err);

// // // // })

// // // // // create a file in assets folder 

// // //  //http server 

// // //  // http 

// // //  //broswer  - server http 

// // //  //protocol - set  of rules  

  


// // // // fs  - in built module 
// // // //http 

// // //    import http from "http"

// // //    const server = http.createServer((req, res )=>{
// // //   console.log(res);
// // // res.statusCode = 200
// // // //   res.end()
  
// // //     //ok
// // // res.end("req received on server ")
// // //    })

// // // //    API / GET METHOD 

// // //    //port number 

// // //    // 3000

// // //    server.listen(3000, ()=>{
// // //     console.log("server connection estbld ");
    
// // //    })

// // //    //postman  
// // //    // cryptography 

// // //    // http methods 
// // //    // express 
// // //    //restful apis (nrml apis )



// //  //crypto 

// //  // createHash , update digest 

// //   import crypto from "crypto"

// // //   sha256

   
// // // hexadecimal  - 0-9 a-f
// //     const hashedpassword= crypto.createHash("sha256").update("itsmypassword").digest("hex")
// // // algorithm 

// // console.log(hashedpassword);


// // //bcrypt  


//   // express 

// //   framework , syntax , in builts , 

// // XPathExpression()

//       import express from "express"
// import dotenv from "dotenv"
// // configure b 
// console.log("-0--------------");

//  dotenv.config()
//        const app= express()


//        //middleware -> req    middleware  res
       
//        app.use(express.json())
//        //json to object 
// let users =[];
//      // app - server


//      //http methods 

// //get 
// // http://localhost:3000
//  app.get("/", (req, res)=>{
// res.send("welcome from server ")
//  })

//  app.get("/about", (req, res)=>{
//    res.send("about ")
//  })


// // post 

//   app.post("/addUser", (req, res )=>{
// // frontend - req object 

//  let {firstName, lastName, userName, password }= req.body
// //mongodb 

//  users.push({
//   firstName, lastName, userName, password
//  })
//  //socket 

//   res.json({
//     message:"new user added",
//     usersList:  users
//   })
//   })


// // useParams 

// app.get("/user/:userName", (req,res)=>{
// const {userName}= req.params 
// const user = users.find((user)=>user.userName== userName)
// if(user){

//  return res.send(user)

// }
// res.send("user not found ")
 
// })


// //update - put, patch 

//  // put - object update , create 
// //patch - existing 
//  // delete user - username 


// app.patch("/updateUser/:userName", (req,res)=>{
//    const {userName}= req.params
// const {password}= req.body
  

//  const user= users.find((user)=>user.userName=== userName)

//  if(!user){
//   return res.send("user doesnot exist ")
//  }

//  user.password= password

//  res.json({
//   message:"password updated",
//   newPassword: password
//  })
 
// })


//  //delete 

//  app.delete("/deleteUser/:userName", (req,res)=>{
//  // method 

//   const {userName}= req.params
//   console.log(userName);
  
//    const filteredUsers= users.filter((user)=> user.userName !== userName)
// users= filteredUsers;
//     res.json({
//       message:`  user deleted  ${userName}`,
//       users: filteredUsers
//     })
//  })



//  // http - get 




//      app.listen(process.env.PORT, ()=>{
//       console.log(`server started at ${process.env.PORT}`);
      
//      })
// // port number , callback fn (port number allot)
//       //  function express(){
//       //  const server=   http.createServer(()=>{

//       //    })

//       //    return server; 
//       //  }


//       //port 

//       //http methods , rest ful api 

//       // request - http method

//       //cart 

//       //get (view ) , post(add ) , put, patch (update ), delete 








// server 

 import express from "express"
import cors from "cors"
 import dotenv from "dotenv"
import userRouter from "./routers/UserRouter.js"

 dotenv.config()

 const app= express()

  app.use(express.json())
 // routers, controllers 
app.use(cors())
 // user 

  app.use("/user" , userRouter)

  //middleware , routes 



app.listen(process.env.PORT, ()=>{
  console.log("server started ");
  
})



























