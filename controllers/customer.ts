import {Request,Response} from 'express';
import Customer from '../models/customer';

export const consultCustomers=async (req:Request, res:Response) =>{
 const customers = await Customer.findAll();
  res.status(200).json({
      msg:'Consultar Clientes TS',
      customers
    })
  }
  export const consultCustomerById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const customer=await Customer.findByPk(id);
    //validacion si el producto no se encuentra
    if(customer){
      res.status(200).json({
        customer
     })
    }else{
      res.status(200).json({
        msg:'El cliente no existe'
     })
    }
    
  }
  export const consultCustomerNames= async(req:Request, res:Response) =>{
    const {names}=req.params;
    const customer=await Customer.findAll({
      where:{
        names:names
      }
      
    });
 
    res.status(200).json({
        customer
   })
  }

  export const saveCustomers= async(req:Request, res:Response) =>{
      const {names,lastName,document,email,address,celphone}=req.body;
    const customer=await Customer.create({names:names,lastName,document,email,address,celphone});//para crear un nuevo usuario
     res.status(200).json({
     msg:`Se ha registrado un nuevo cliente con id:${customer.dataValues.id}`
    })
  }
  export const updateCustomer= async(req:Request, res:Response) =>{
    const {id,names,lastName,document,email,address,celphone}=req.body;
   const customer=await Customer.update({names:names,lastName,document,email,address,celphone},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`El cliente con id:${id} ha sido actualizado`
   })
 }
 export const deleteCustomer= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Customer.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`El cliente con id:${id} ha sido eliminado`
 })
}