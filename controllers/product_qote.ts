import {Request,Response} from 'express';
import Product_qote from '../models/product_qote';
import Product from '../models/product';
import Quotation from '../models/quotation';

export const consultProduct_qotes=async (req:Request, res:Response) =>{
 const product_qotes = await Product_qote.findAll({
  include:[{
    model:Quotation
  }
 , {
     model:Product
   }]
 });
  res.status(200).json({
      msg:'Consultar cotizacion productos TS',
      product_qotes
    })
  }
  export const consultProduct_qoteById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const product_qote=await Product_qote.findByPk(id);
    //validacion si el producto no se encuentra
    if(product_qote){
      res.status(200).json({
        product_qote
     })
    }else{
      res.status(200).json({
        msg:'La cotizacion producto no existe'
     })
    }
    
  }
//   export const consultProduct_qoteNames= async(req:Request, res:Response) =>{
//     const {names}=req.params;
//     const product_qote=await Product_qote.findAll({
//       where:{
//         names:names
//       }
      
//     });
 
//     res.status(200).json({
//         product_qote
//    })
//   }

  export const saveProduct_qotes= async(req:Request, res:Response) =>{
    //   const {id_quatation,id_prod,amount_prod,descount,imported}=req.body;
    // const product_qote=await Product_qote.create({id_quatation,id_prod,amount_prod,descount,imported});//para crear un nuevo usuario
    const {body}=req;
    body.id_quotation=2;
    body.id_prod=3;
    const product_qote=await Product_qote.create(body);
    res.status(200).json({
     msg:`Se ha registrado una nueva cotizacion producto con id:${product_qote.dataValues.id}`
    })
  }
  export const updateProduct_qote= async(req:Request, res:Response) =>{
    const {id,id_quatation,id_prod,amount_prod,descount,imported}=req.body;
   const product_qote=await Product_qote.update({id_quatation,id_prod,amount_prod,descount,imported},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`La cotizacion producto con id:${id} ha sido actualizada`
   })
 }
 export const deleteProduct_qote= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Product_qote.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`La cotizacion producto con id:${id} ha sido eliminada`
 })
}