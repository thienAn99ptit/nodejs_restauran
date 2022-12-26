import express from "express";

import OrderController from "../app/controllers/OrderController.js";

const router = express.Router()

const orderController = OrderController



router.get('/',orderController.json)



export {router}