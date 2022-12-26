import Menu from "../models/MenuModel.js";


import { handleMongoose } from "../../until/mongoose.js";

class HomeController{
    // [GET] manager
    index (req, res, next) {
        Menu.find({})
            .then(menu=> {
                res.render('home',{
                    menu : handleMongoose.multipleMongooseToObject(menu)
                })
            })
            .catch(error => next(error))

    }

     // [Post] method
     post(req, res, next){
        console.log(req.body)
        
    }
}

export default  new HomeController;