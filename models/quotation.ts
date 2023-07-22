import { DataTypes } from "sequelize";
import db from "../db/connection";
import User from "./user";
import Customer from "./customer";

const Quotation=db.define('Quotation',{
    date:{
         type:DataTypes.STRING
     },
    codNumber:{
        type:DataTypes.STRING
    },
    description:{
        type:DataTypes.STRING
    },
    full_value:{
        type:DataTypes.DECIMAL
    },
    id_user:{
        type:DataTypes.INTEGER
    },
    id_customers:{
        type:DataTypes.INTEGER
    }
})
Quotation.belongsTo(User,{
    foreignKey:'id_user'
})
Quotation.belongsTo(Customer,{
     foreignKey:'id_customers'
 })
export default Quotation;