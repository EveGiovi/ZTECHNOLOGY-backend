import {Router} from 'express'
import { consultProduct_qotes,consultProduct_qoteById,saveProduct_qotes,updateProduct_qote,deleteProduct_qote } from '../controllers/product_qote';
// consultProduct_qoteNames
const router=Router();

router.get('/consultProduct_qotes',consultProduct_qotes)
router.get('/consultProduct_qote/:id',consultProduct_qoteById)
// router.get('/consultProduct_qoteByNames/:names',consultProduct_qotes)
router.post('/saveProduct_qote',saveProduct_qotes)
router.put('/updateProduct_qote',updateProduct_qote)
router.delete('/deleteProduct_qote/:id',deleteProduct_qote)

export default router;