import {Router} from 'express';
import { loginAuth, logout } from '../controllers/auth';
import validateJWT from '../helpers/validate-jwt';//importar validate

const router = Router();
router.post('/login',loginAuth);
router.post('/logout',validateJWT,logout);//pare cerrar sesion
export default router;