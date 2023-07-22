import {Request,Response} from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user';
import Login from '../models/login';
import generateJWT from '../helpers/generate-jwt';

export const loginAuth = async(req: Request,res:Response)=>{
    const { email, password } = req.body;
    console.log(req.body);
    try {
        //verificar si el email existe
        const loginAuth=await Login.findOne({
            where:{
                email
            }
        })
        if(!loginAuth){
            return res.status(400).json({
                msg:'El usuario no esta registrado'
            });
        }
        // if(password!==loginAuth.dataValues.password){
        //     return res.status(400).json({
        //         msg:'Usuario/contraseña no son correctos'
        //     });
        // }
        const validPass=bcrypt.compareSync(password,loginAuth.dataValues.password)
         if(!validPass){
             return res.status(400).json({
                 msg:'Usuario/contraseña no son correctos'
             });
         }
        // if(!loginAuth.dataValues.state){
        //      return res.status(400).json({
        //          msg:'El usuario no esta actvo'
        //      });
        //  }
        // else{
        //     return res.status(400).json({
        //         msg:'Ok'
        //     });
        // }
        // Generar el JWT
        const token = await generateJWT(loginAuth.dataValues.id);
        console.log(token)
        return res.status(200).json({
           token,
           user:loginAuth
       });
        
    } catch (error) {
        
    }
}
export const logout=async (req:Request,res:Response)=>{
    return res.status(200).json({
        msg:'El usuario cerró sesión correctamente.'
    });
}

