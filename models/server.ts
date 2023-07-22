import express,{Application} from 'express';
import cors from 'cors';
import db from '../db/connection';
import authRouters from '../routes/auth';
import customerRouters from '../routes/customer';
import loginRouters from '../routes/login';
import product_qoteRouters from '../routes/product_qote';
import productRouters from '../routes/product';
import quotationRouters from '../routes/quotation';
import rolRouters from '../routes/role';
import userRouters from '../routes/user';

class Server{
    private app:Application;
    private port:string | undefined;
    private apiPaths={
        auth:'/api/auth',
        customers:'/api/customers',
        logins:'/api/logins',
        product_qotes:'/api/product_qotes',
        products:'/api/products',
        quotations:'/api/quotations',
        roles:'/api/roles',
        users:'/api/users',

    }
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        this.dbConection();
        this.middlewares();
        this.routes();
    }

    async dbConection(){
        try {
            await db.authenticate();
            console.log('database online');
        } catch (error) {
            console.log(error);
        }
    }
    middlewares(){
        //lectura parseo del body
        this.app.use(express.json());
        this.app.use(cors());
        //configurar la carpeta estatica
        this.app.use('/uploads',express.static('uploads'))
        
    }
    routes(){
        this.app.use(this.apiPaths.auth,authRouters);
        this.app.use(this.apiPaths.customers,customerRouters);
        this.app.use(this.apiPaths.logins,loginRouters);
        this.app.use(this.apiPaths.product_qotes,product_qoteRouters);
        this.app.use(this.apiPaths.products,productRouters);
        this.app.use(this.apiPaths.quotations,quotationRouters);
        this.app.use(this.apiPaths.roles,rolRouters);
        this.app.use(this.apiPaths.users,userRouters);

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Se esta ejecutando en el puerto: ${this.port}`);
        })
    }
}

export default Server;