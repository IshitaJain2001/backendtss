import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
  console.log("hello ....");
  
 
 const [isloggedin, setIsloggedin] = useState(false)
 const [message, setMessage]= useState("")
  const [user,setUser]= useState({
    firstName:"",
    lastName:"",
    userName:""
  })

   const [logindetails, setLogindetails]= useState({
    userName:"",
    password:""
   })
useEffect(()=>{
  async function getUser(){

 let res= await fetch('http://localhost:3000/user/getUser',{
  method:"POST",

    credentials: "include"
  
 })
 //json 

let data=await res.json();
console.log("data", data);


  if(res.status=== 400 || res.status== 500|| res.status=== 401){

setMessage(data.message)
    return;
  }


setUser(data.user)
setIsloggedin(true)

  }

  getUser()
},[])

console.log(user);


 async function handleLogout(e){
  e.preventDefault()
 let res=  await fetch("http://localhost:3000/user/logout", {
    method:"POST",
    credentials:"include"
  })

   //status , json 

   let data= await res.json()

    if(res.status=== 401 || res.status=== 404){
      setMessage(data.message)
      return ;
    }

     setIsloggedin(false);
 }


  async function handleLogin(e){
e.preventDefault()

if(logindetails.userName.trim()==="" || logindetails.password.trim()===""){
  alert("either password or username is missing")
  return ;
}

 let res= await fetch("http://localhost:3000/user/login", {
  method:"POST",
headers:  {
"Content-Type" :"application/json"
  },
  body:JSON.stringify(logindetails)
 })
let data= await res.json()
  // 400, 404, 200

   if(res.status=== 400 || res.status=== 404){
setMessage(data.message)
return;
   }

   setUser(data.user)
   setIsloggedin(true )
  }
  


   function login(e){
    let {name, value}= e.target 

     setLogindetails({
      ...logindetails,
      [name]:value
     })
   }

  return (
    <div>
      {
        message?.length >0 ?
        <p> {message}</p> :<p></p>
      }
      {
        isloggedin?<>
        <p>{user.firstName} {user?.lastName}</p>

<p>{user.userName}</p>
<button onClick={handleLogout}>logout</button>
        
        </> : <>
        
        <input type="text" name="userName" id="" placeholder='username' onChange={login}/>

<input type="password" name="password" id="" placeholder='password' onChange={login}/>
<button onClick={handleLogin}>enter</button>
        </>
      }





    </div>
  )
}
