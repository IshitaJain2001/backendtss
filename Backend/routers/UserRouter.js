import { Router } from "express";
import { addUser, deleteAll, deleteUser, getAll, getUser, login, logout, updateUser } from "../controllers/User.js";
import hashedpassword from "../middlewares/passwordHashing.js";




 const userRouter= Router()


// http methods 

// http://localhost:3000/user

//  userRouter.post("/", ()=>{

//  })


userRouter.post("/add" ,  hashedpassword  , addUser)
userRouter.get("/get" , getAll)
userRouter.get("/get/:userName" , getUser)
userRouter.patch("/update/:userName" , updateUser)
userRouter.delete("/delete" , deleteAll)
userRouter.delete("/delete/:userName" , deleteUser)
userRouter.post("/logout/:userName", logout)
userRouter.post("/login", login)
  export default userRouter;