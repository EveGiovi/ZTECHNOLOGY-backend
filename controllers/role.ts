import {Request,Response} from 'express';
import Role from '../models/role';

export const consultRoles=async (req:Request, res:Response) =>{
 const roles = await Role.findAll();
  res.status(200).json({
      msg:'Consultar Roles TS',
      roles
    })
  }
  export const consultRoleById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const role=await Role.findByPk(id);
    //validacion si el producto no se encuentra
    if(role){
      res.status(200).json({
        role
     })
    }else{
      res.status(200).json({
        msg:'El rol no existe'
     })
    }
    
  }
  export const consultRoleNames= async(req:Request, res:Response) =>{
    const {names}=req.params;
    const role=await Role.findAll({
      where:{
        names:names
      }
      
    });
 
    res.status(200).json({
        role
   })
  }

  export const saveRoles= async(req:Request, res:Response) =>{
      const {names,description}=req.body;
    const role=await Role.create({names:names,description});//para crear un nuevo usuario
     res.status(200).json({
     msg:`Se ha registrado un nuevo cliente con id:${role.dataValues.id}`
    })
  }
  export const updateRole= async(req:Request, res:Response) =>{
    const {id,names,description}=req.body;
   const rol=await Role.update({names:names,description},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`El rol con id:${id} ha sido actualizado`
   })
 }
 export const deleteRole= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Role.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`El rol con id:${id} ha sido eliminado`
 })
}