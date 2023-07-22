import {Router} from 'express'
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { consultProducts,consultProductById,consultProductNames,saveProducts,updateProduct,deleteProduct } from '../controllers/product';

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

router.get('/consultProducts',consultProducts)
router.get('/consultProduct/:id',consultProductById)
router.get('/consultProductByNames/:names',consultProductNames)
router.post('/saveProduct',upload.single('file'),saveProducts)
router.put('/updateProduct',updateProduct)
router.delete('/deleteProduct/:id',deleteProduct)

export default router;