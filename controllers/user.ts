import {Request,Response} from 'express';
import User from '../models/user';

export const consultUsers=async (req:Request, res:Response) =>{
 const users = await User.findAll({
    // where:{
    //     state:1
    //   }
 });
  res.status(200).json({
      msg:'Consultar Usuarios TS',
      users
    })
  }
  export const consultUserById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const user=await User.findByPk(id);
    //validacion si el usuario no se encuentra
    if(user){
      res.status(200).json({
        user
     })
    }else{
      res.status(200).json({
        msg:'El usuario no existe'
     })
    }
    
  }
  export const consultUserfirstName= async(req:Request, res:Response) =>{
    const {firstName}=req.params;
    const user=await User.findAll({
      where:{
        firstName:firstName
      }
      
    });
 
    res.status(200).json({
        user
   })
  }

  export const saveUsers= async(req:Request, res:Response) =>{
    //   const {firstName,secondName,firstLastName,secondLastName,document,email,address,celphone,picture,age}=req.body;
    // const user=await User.create({firstName,secondName,firstLastName,secondLastName,document,email,address,celphone,picture,age});//para crear un nuevo usuario
    
    const {body}=req;
    const user=await User.create(body);

    res.status(200).json({
     msg:`Se ha registrado un nuevo usuario con id:${user.dataValues.id}`
    })
  }
  export const updateUser= async(req:Request, res:Response) =>{
    const {id,firstName,secondName,firstLastName,secondLastName,document,email,address,celphone,picture,age,state}=req.body;
   const user=await User.update({firstName,secondName,firstLastName,secondLastName,document,email,address,celphone,picture,age,state},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`El usurio con id:${id} ha sido actualizado`
   })
 }
 export const deleteUser= async(req:Request, res:Response) =>{
  const {id}=req.params;
//  await User.destroy({ // const user= aqui se elimina la constante por que no se usa
//   where:{
//     id
//   }
//  });
const state=0;
await User.update({state},{
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`El usuario con id:${id} ha sido eliminado`
 })
}