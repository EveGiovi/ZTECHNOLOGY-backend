import { DataTypes } from "sequelize";
import db from "../db/connection";
import Quotation from "./quotation";
import Product from "./product";

const Product_qote=db.define('Product_qote',{
    id_quotation:{
        type:DataTypes.INTEGER
    },
    id_prod:{
        type:DataTypes.INTEGER
    },
    amount_prod:{
        type:DataTypes.INTEGER
    },
    descount:{
        type:DataTypes.DECIMAL//*verificar si es decimal o double*/
    },
    imported:{
        type:DataTypes.DECIMAL
    }
})
Product_qote.belongsTo(Quotation,{
    foreignKey:'id_quotation'
})
Product_qote.belongsTo(Product,{
     foreignKey:'id_prod'
 })
export default Product_qote;