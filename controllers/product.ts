import {Request,Response} from 'express';
import Product from '../models/product';

export const consultProducts=async (req:Request, res:Response) =>{
 const products = await Product.findAll();
  res.status(200).json({
      msg:'Consultar Productos TS',
      products
    })
  }
  export const consultProductById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const product=await Product.findByPk(id);
    //validacion si el producto no se encuentra
    if(product){
      res.status(200).json({
        product
     })
    }else{
      res.status(200).json({
        msg:'El producto no existe'
     })
    }
    
  }
  export const consultProductNames= async(req:Request, res:Response) =>{
    const {names}=req.params;
    const product=await Product.findAll({
      where:{
        names:names
      }
      
    });
 
    res.status(200).json({
        product
   })
  }

  export const saveProducts= async(req:Request, res:Response) =>{
    //   const {names,brand,value,characteristics,specifications,stock,image}=req.body;
    // const product=await Product.create({names:names,brand,value,characteristics,specifications,stock,image});//para crear un nuevo usuario
     //***CAMBIAR AL BODY */
     const {body}=req;
     //agregar para que guarda en sql
     body.image=req.file?.filename;
     const product=await Product.create(body);
    res.status(200).json({
     msg:`Se ha registrado un nuevo producto con id:${product.dataValues.id}`
    })
  }
  export const updateProduct= async(req:Request, res:Response) =>{
    const {id,names,brand,value,characteristics,specifications,stock,image}=req.body;
   const product=await Product.update({names:names,brand,value,characteristics,specifications,stock,image},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`El producto con id:${id} ha sido actualizado`
   })
 }
 export const deleteProduct= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Product.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`El producto con id:${id} ha sido eliminado`
 })
}