import { DataTypes } from "sequelize";
import db from "../db/connection";

const Customer=db.define('Customer',{
    names:{
        type:DataTypes.STRING
    },
    lastName:{
        type:DataTypes.STRING
    },
    document:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    address:{
        type:DataTypes.STRING
    },
    celphone:{
        type:DataTypes.STRING
    }
})
export default Customer;