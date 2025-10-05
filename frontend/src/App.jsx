 import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Profile from './Profile'
 
 export default function App() {
   return (
     <div>
      <Link to="/signup">
      <button >signup</button>
      
      </Link>

<button></button>
      <Routes>


        <Route path="/signup" element={<Signup/>}/>
             <Route path="/profile" element={<Profile/>}/>
      </Routes>
     </div>
   )
 }
 