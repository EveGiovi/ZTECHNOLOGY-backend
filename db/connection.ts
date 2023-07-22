import { Sequelize } from "sequelize";

const db=new Sequelize('ztechnologys', 'root','',{
    host:'localhost',
    dialect:'mysql'
})

export default db;
