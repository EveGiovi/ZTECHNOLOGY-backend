import {Router} from 'express';
import multer from 'multer'; //importar la libreria multer
import { v4 as uuidv4 } from 'uuid'; //importar la libreria uuid
import { consultLogins,consultLoginById,consultLoginuserName,saveLogins,updateLogin,deleteLogin } from '../controllers/login';
import validateJWT from '../helpers/validate-jwt';

//copiar el codigo de la pagina de multer y pegarlo
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const randomName=uuidv4();

      cb(null,`${randomName}.${file.mimetype.split("/")[1]}`)
    }
  })

  const upload = multer({ storage: storage })

const router=Router();

// router.get('/consultLogins',validateJWT,consultLogins)//enviando el token
router.get('/consultLogins',consultLogins)
router.get('/consultLogin/:id',consultLoginById)
router.get('/consultLoginByNames/:userName',consultLoginuserName)
router.post('/saveLogin',upload.single('file'), saveLogins)//upliad para subir imagenes
router.put('/updateLogin',updateLogin)
router.delete('/deleteLogin/:id',deleteLogin)

export default router;