import {Router} from 'express'
import { saveQuotesProduct,consultQuotations,consultQuotationById,consultQuotationcodNumber,saveQuotations,updateQuotation,deleteQuotation } from '../controllers/quotation';
const router=Router();


router.post('/saveQuotesProduct',saveQuotesProduct)
router.get('/consultQuotations',consultQuotations)
router.get('/consultQuotation/:id',consultQuotationById)
router.get('/consultQuotationBycodNumber/:codNumber',consultQuotationcodNumber)
router.post('/saveQuotation',saveQuotations)
router.put('/updateQuotation',updateQuotation)
router.delete('/deleteQuotation/:id',deleteQuotation)

export default router;