 


 let users= []
 
 
 export function addUser(req,res){
const {firstName, lastName, userName, password }= req.body;

if((!firstName || firstName.trim()=== "") || (!userName || userName.trim()=== "")){
   return res.status(401).json({
        message:" data was incomplete "
    })
}


 // bcrypt - password hash 
// username duplicate 
 
// let ifExist= false;
//        users.forEach((user)=> 
//       user.userName=== userName ? ifExist= true:ifExist= false
//      )


let ifExist= users.find((user)=> user.userName=== userName)

if(ifExist){
  return res.status(401).json({
    message:"username already exist "
  })
}
 

// username fresh , pssword hashhed 

users.push(req.body)

return res.status(201).json({
  message:"user added",
  user: req.body
})
 }
  export function getUser(req,res){

 }
  export function updateUser(req,res){

 }
  export function deleteUser(req,res){

 }
   export function deleteAll(req,res){

 }

 export function getAll(req,res){

 }