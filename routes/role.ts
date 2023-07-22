import {Router} from 'express'
import { consultRoles,consultRoleById,consultRoleNames,saveRoles,updateRole,deleteRole } from '../controllers/role';
const router=Router();

router.get('/consultRoles',consultRoles)
router.get('/consultRole/:id',consultRoleById)
router.get('/consultRoleByNames/:names',consultRoleNames)
router.post('/saveRole',saveRoles)
router.put('/updateRole',updateRole)
router.delete('/deleteRole/:id',deleteRole)

export default router;