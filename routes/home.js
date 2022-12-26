import express from "express";

import HomeController from "../app/controllers/HomeController.js";

const router = express.Router()

const homeController = HomeController


router.get('/',homeController.index)



export {router}