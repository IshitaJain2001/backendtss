import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Signup() {
  const [form,setForm]= useState({
    firstName:"",
    lastName:"",
    userName:"",
    password:""
  })
const dispatch= useDispatch()
  const navigate=  useNavigate()

   function handleChange(e){
const {name, value}= e.target
setForm({
  ...form, 
  [name]: value
})
   }

   async function submitHandler(){
// api call

 let res= await fetch("http://localhost:3000/user/add" , {
  method:"POST",
  headers:{
 "Content-Type":"application/json"
  },
  body: JSON.stringify(form)
 }) 
let data;
    if(res.status=== 401){
    data=  await res.json()

   alert(data.message)
   return ;
    }

    if(res.status=== 201){
            data=  await res.json()
        dispatch({
            type:"signup",
            payload: data.user
        })
      navigate("/profile")
    }
   }
  return (
    <div>

      <input type="text" name="firstName" placeholder='firstName' onChange={handleChange}/>
      <input type="text" name='lastName' placeholder="lastName" onChange={handleChange}/>
        <input type="text" name='userName'  placeholder="userName" onChange={handleChange}/>
        <input type="password" name="password"  placeholder="password" onChange={handleChange}/>

        <button onClick={submitHandler}>submit </button>
    </div>
  )
}
