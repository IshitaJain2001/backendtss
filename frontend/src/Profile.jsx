import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Profile() {
 const {userName}=  useSelector((state)=>state.user)
 const [isloggedin, setIsloggedin] = useState(false)
  const [user,setUser]= useState({
    firstName:"",
    lastName:"",
    userName:""
  })
useEffect(()=>{
  async function getUser(){
console.log(userName);
 let res= await fetch(`http://localhost:3000/get/${userName}`)
 //json 

 let data= res.json()

  if(res.status=== 400 || res.status== 500){

    return;
  }

  // 200 - ok 

setUser(data.user)
isloggedin(true)

  }

  getUser()
},[])
  return (
    <div>
      {
        isloggedin?<>
        <p>{user.firstName} {user?.lastName}</p>

<p>{user.userName}</p>
        
        </> : <>
        
        <input type="text" name="" id="" placeholder='username'/>

<input type="password" name="" id="" placeholder='password'/>
<button>enter</button>
        </>
      }




<button>logout</button>
    </div>
  )
}
