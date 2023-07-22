import {Router} from 'express'
import { consultUsers,consultUserById,consultUserfirstName,saveUsers,updateUser,deleteUser } from '../controllers/user';
const router=Router();

router.get('/consultUsers',consultUsers)
router.get('/consultUser/:id',consultUserById)
router.get('/consultUserByfirstName/:firstName',consultUserfirstName)
router.post('/saveUser',saveUsers)
router.put('/updateUser',updateUser)
router.delete('/deleteUser/:id',deleteUser)

export default router;