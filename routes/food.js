import express from "express";

import FoodController from "../app/controllers/FoodController.js";

const router = express.Router()

const foodController = FoodController


router.get('/',foodController.index)



export {router}