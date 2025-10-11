 


 let users= []
 import bcrypt from "bcrypt"
 import jwt from "jsonwebtoken"

 export function addUser(req,res){
const {firstName, lastName, userName, password }= req.body;

if((!firstName || firstName.trim()=== "") || (!userName || userName.trim()=== "")){
   return res.status(401).json({
        message:" data was incomplete "
    })
}

let ifExist= users.find((user)=> user.userName=== userName)

if(ifExist){
  return res.status(401).json({
    message:"username already exist "
  })
}
 

// username fresh , pssword hashhed 

users.push(req.body)

// return res.status(201).json({
//   message:"user added",
//   user: req.body
// })

let token=  jwt.sign({id:userName},process.env.secret_key,{
  expiresIn:"3d"
 } )
 console.log(token);
 
 return res.status(201)
 .cookie("token", token)
 .json({
  message:"signedUp successfully !!",
  user:req.body
 })
 }






 // get USER 

  export async function getUser(req,res){
    console.log(req.cookies );
    
let {token} = req.cookies
console.log(token);

try {
if(!token) return res.status(401).json({
  message:"user not loggedin "
})

const decoded=   jwt.verify(token, process.env.secret_key)
// iat 
// id

const userName= decoded.id
console.log(userName);

 const userFound= users.find((user)=> user.userName=== userName)
if(!userFound) return res.status(404).json({
  message:"invalid token!! "
})

  return res.status(200).json({
    message:"user found",
    user:userFound
  })

} catch (error) {
 return res.status(500).json({
  message: error
 }) 
}
 

 }
  export function updateUser(req,res){

 }
  export function deleteUser(req,res){

 }
   export function deleteAll(req,res){

 }

 export function getAll(req,res){

 }

 export function logout(req,res){
 // token?? 

  const {token}= req.cookies

  console.log(token );

  if(!token){
    return res.status(401).json({
      message:"please login first..."
    })
  }
   
  const {id}= jwt.verify(token, process.env.secret_key)

  const userFound= users.find(user=> user.userName=== id)

  if(!userFound){
    return res.status(404).json({
      message:"invalid token "
    })
  }

  // token , shi b h 

   return res.clearCookie().status(200).json({
    message:"logged out successfully "
   })
 }

 export async function login(req,res){
const {userName, password}= req.body 
// puri info nhi bhji 
if(!userName || userName.trim()=="" || !password || password.trim()==""){
  // 400 

  return res.status(400).json({
    message:"both credentials needed !!"
  })
}

 // username db exist 
 const userFound= users.find((user)=> user.userName=== userName)
if(!userFound) return res.status(404).json({
  message:"user not found "
})
// 404
// username exist password incorrect 

 let isVerified= await bcrypt.compare(password,userFound.password )

if(!isVerified){
  return res.status(400).json({
    message:"incorrect credentials "
  })
}

 // username- password 
// jwt signup
 // protected routes 
 
let token=  jwt.sign({id:userName},process.env.secret_key,{
  expiresIn:"7d"
 } )
 return res.status(200)
 .cookie("token", token)
 .json({
  message:"loggedin successfully !!",
  user: userFound
 })
 }