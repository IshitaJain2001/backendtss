 import bcrypt from "bcrypt"

 export default  async function hashedpassword(req,res, next ){
     // pre requisite 

     // password existence ??

     const {password}= req.body
     if(!password || password.trim()==""){
        return res.status(401).json({
            message:"password not found"
        })
     }

      //password exist 

   const passhashed =await bcrypt.hash(password, 10)   
req.body.password= passhashed;
next()
  }

  // custom middleware 

