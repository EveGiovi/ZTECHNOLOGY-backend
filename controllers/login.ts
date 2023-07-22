  import {Request,Response} from 'express';
  import Role from '../models/role';
  import User from '../models/user';
  import Login from '../models/login';
  import bcrypt from 'bcryptjs';

export const consultLogins=async (req:Request, res:Response) =>{
 const logins = await Login.findAll({
  //para restringir que atributos quiero mostrar
  attributes:['id','userName','email','picture','id_rol','id_user'],
  include:[{
    model:Role
  }
 , {
     model:User
   }
]
}
 );
  res.status(200).json({
      msg:'Consultar cuentas TS',
      logins
    })
  }
  export const consultLoginById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const login=await Login.findByPk(id);
    //validacion si el usuario no se encuentra
    if(login){
      res.status(200).json({
        login
     })
    }else{
      res.status(200).json({
        msg:'La cuenta no existe'
     })
    }
    
  }
  export const consultLoginuserName= async(req:Request, res:Response) =>{
    const {userName}=req.params;
    const login=await Login.findAll({
      where:{
        userName:userName
      }
      
    });
 
    res.status(200).json({
        login
   })
  }

  export const saveLogins= async(req:Request, res:Response) =>{
   
    //***CAMBIAR AL BODY */
    const {body}=req;
    //agregar para que guarda en sql
    body.picture=req.file?.filename;
    body.id_rol=2;
    body.id_user=3;

     //Encriptar la contraseña
    //  const salt = bcrypt.genSaltSync();
    //  body.password = bcrypt.hashSync(body.password, salt);
     ////
    const login=await Login.create(body);
    res.status(200).json({
     msg:`Se ha registrado una nueva cuenta con id:${login.dataValues.id}`
    })
  }
  export const updateLogin= async(req:Request, res:Response) =>{

  const { body } = req;
  body.picture=req.file?.filename;
  body.id_rol=2;
  body.id_user=3;

  const user = await Login.update(body, {
      where: {
          id: body.id
      }
  });
    res.status(200).json({
    msg:`La cuenta con id:${body.id} ha sido actualizada`
   })
 }
 export const deleteLogin= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Login.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`La cuenta con id:${id} ha sido eliminada`
 })
}