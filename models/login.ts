import { DataTypes } from "sequelize";
import db from "../db/connection";
import Role from "./role"; //importar los modelos de las tablas a relacionar
import User from "./user";

const Login=db.define('Login',{
    userName:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    picture:{
        type:DataTypes.STRING
    },
    id_rol:{
        type:DataTypes.INTEGER
    },
    id_user:{
        type:DataTypes.INTEGER
    }
})
Login.belongsTo(Role,{
    foreignKey:'id_rol'
})
 Login.belongsTo(User,{
     foreignKey:'id_user'
 })
export default Login;