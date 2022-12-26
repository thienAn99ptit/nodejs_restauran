import express from "express";
import  multer from "multer"
import  path from "path"


import ManagerController from "../app/controllers/ManagerController.js";
import OrderController from "../app/controllers/OrderController.js";
import MenuController from "../app/controllers/MenuController.js";



const router = express.Router()



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/file')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

const upload = multer({ storage: storage });



const menuController = MenuController
const orderController = OrderController
const managerController = ManagerController


// router.post('/create-menu',managerController.create)
// router.get('/create-menu',managerController.create)

// router.get('/:slug',managerController.post)

router.get('/menu/delete',menuController.delete)

router.post('/menu/update', upload.single('image'), menuController.update)

router.post('/menu/store',upload.single('image'),menuController.store)

router.get('/menu/edit',menuController.edit)

router.get('/menu/create',menuController.create)


router.get('/menu',menuController.show)

router.get('/order/:id',orderController.confirm)

router.get('/order',orderController.show)

router.post('/post',managerController.post)

router.get('/',managerController.index)



export {router}