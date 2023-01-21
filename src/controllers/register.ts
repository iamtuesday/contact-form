import { Response, Request, NextFunction } from 'express'

// const UserModel = require('../models/userModel')

const register = async (req: Request, res: Response, next: NextFunction) => {
  // try{
  //     const {name, email, password} = req.body;
  // const verifyUser = await UserModel.findOne({name});
  // if(verifyUser)
  //   return res.json({msg: "User already registered", status: false});
  // const verifyEmail = await UserModel.findOne({email});
  // if(verifyEmail)
  //   return res.json({msg: "Email already registered", status: false});
  // const hashedPassword = await bcrypt.hash(password, 10);
  // const User = await UserModel.create({
  //     name,
  //     email,
  //     password: hashedPassword
  // });
  // delete User.password;
  // return res.json({status: true, User})
  // } catch(err){
  //     console.log(err);
  //     next();
  // }
}

export default { register }
