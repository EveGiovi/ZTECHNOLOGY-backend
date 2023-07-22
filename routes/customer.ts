import {Router} from 'express'
import { consultCustomers,consultCustomerById,consultCustomerNames,saveCustomers,updateCustomer,deleteCustomer } from '../controllers/customer';
const router=Router();

router.get('/consultCustomers',consultCustomers)
router.get('/consultCustomer/:id',consultCustomerById)
router.get('/consultCustomerByNames/:userName',consultCustomerNames)
router.post('/saveCustomer',saveCustomers)
router.put('/updateCustomer',updateCustomer)
router.delete('/deleteCustomer/:id',deleteCustomer)

export default router;