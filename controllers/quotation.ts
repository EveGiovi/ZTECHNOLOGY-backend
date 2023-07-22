import {Request,Response} from 'express';
import User from '../models/user';
import Customer from '../models/customer';
import Quotation from '../models/quotation';
import Product_qote from '../models/product_qote';

export const saveQuotesProduct = async ( req: Request, res: Response) => {
  const {codNumber,description,full_value,id_user,id_customers,products}=req.body;
  try {
  const quote = await Quotation.create({
                  codNumber,
                  description,
                  full_value,
                  id_user,
                  id_customers});
     
          console.log(quote.dataValues)
//datos de la tabla detatalle_cotizacion
//relacionar productos con cotizacion
          for(const product of products){
            await Product_qote.create({
            id_quotation: quote.dataValues.id,
            id_prod:product.id_prod,
             //agregar unitValue:Product.value,
            amount_prod:product.amount_prod,
            //descount
            imported:product.imported     
                  });
              }
      res.status(200).json({
          msg: `se ha creado la cotización con el id:${quote.dataValues.id}`
      })
  } catch (error) {
      //console.log('Ocurrio un error al agregar cotizacion y productos',error);
//res.status(500).json({message:'Ocurrio u  error al agregar la cotizacion y productos	'});
  }
}

////consultar todas las cotizaciones
export const consultQuotations=async (req:Request, res:Response) =>{
 const quotations = await Quotation.findAll({
  include:[{
    model:User
  }
 , {
     model:Customer
   }
]
 }
 );
  res.status(200).json({
      msg:'Consultar cotizaciones TS',
      quotations
    })
  }
  export const consultQuotationById= async(req:Request, res:Response) =>{
    const {id}=req.params;
    const quotation=await Quotation.findByPk(id);
    //validacion si el producto no se encuentra
    if(quotation){
      res.status(200).json({
        quotation
     })
    }else{
      res.status(200).json({
        msg:'la cotizacion no existe'
     })
    }
    
  }
  export const consultQuotationcodNumber= async(req:Request, res:Response) =>{
    const {codNumber}=req.params;
    const quotation=await Quotation.findAll({
      where:{
        codNumber:codNumber
      }
      
    });
 
    res.status(200).json({
        quotation
   })
  }

  export const saveQuotations= async(req:Request, res:Response) =>{
    //   const {codNumber,description,full_value,id_user,id_customers}=req.body;
    // const quotation=await Quotation.create({codNumber,description,full_value,id_user,id_customers});//para crear un nuevo usuario
    const {body}=req;
    body.id_user=2;
    body.id_customers=3;
    const quotation=await Quotation.create(body);
    res.status(200).json({ 
     msg:`Se ha registrado una nueva cotizacion con id:${quotation.dataValues.id}`
    })
  }
  export const updateQuotation= async(req:Request, res:Response) =>{
    const {id,codNumber,description,full_value,id_user,id_customers}=req.body;
   const quotation=await Quotation.update({codNumber,description,full_value,id_user,id_customers},{
    where:{
      id
    }
   });
    res.status(200).json({
    msg:`La cotizacion con id:${id} ha sido actualizado`
   })
 }
 export const deleteQuotation= async(req:Request, res:Response) =>{
  const {id}=req.params;
 await Quotation.destroy({ // const user= aqui se elimina la constante por que no se usa
  where:{
    id
  }
 });
  res.status(200).json({
  msg:`La cotizacion con id:${id} ha sido eliminado`
 })
}