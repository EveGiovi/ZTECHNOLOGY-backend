import { DataTypes } from "sequelize";
import db from "../db/connection";

const User=db.define('User',{
    firstName:{
        type:DataTypes.STRING
    },
    secondName:{
        type:DataTypes.STRING
    },
    firstLastName:{
        type:DataTypes.STRING
    },
    secondLastName:{
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
    },
    age:{
        type:DataTypes.INTEGER
    },
    state:{
        type:DataTypes.INTEGER
    }
})
export default User;