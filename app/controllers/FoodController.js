import Menu from "../models/MenuModel.js";

import { handleMongoose } from "../../until/mongoose.js";

class FoodController{
    index(req, res, next){
        Menu.find({})
      .then((menu) => {
        res.status(200).json( {
          menu: handleMongoose.multipleMongooseToObject(menu),
        });
      })
      .catch((error) => next(error));
    }
}

export default new FoodController()