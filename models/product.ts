import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product=db.define('Product',{
    names:{
        type:DataTypes.STRING
    },
    brand:{
        type:DataTypes.STRING
    },
    value:{
        type:DataTypes.DECIMAL
    },
    characteristics:{
        type:DataTypes.STRING
    },
    specifications:{
        type:DataTypes.STRING
    },
    stock:{
        type:DataTypes.INTEGER
    },
    image:{
        type:DataTypes.STRING
    }
})
export default Product;