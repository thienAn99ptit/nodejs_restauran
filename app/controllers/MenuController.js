import Menu from "../models/MenuModel.js";

import { handleMongoose } from "../../until/mongoose.js";

class MenuController {
  show(req, res, next) {

    Menu.find({})
      .then((menu) => {
        res.render("backend/menu/menu", {
          layout: "backend",
          menu: handleMongoose.multipleMongooseToObject(menu),
          title: "Menu",
        });
      })
      .catch((error) => next(error));
  }
  create(req, res, next) {
    res.render("backend/menu/create-menu", {
      layout: "backend",
      title: "Create menu",
    });
  }
  store(req, res, next) {
    const menuData = req.body;
    const imageFood = req.file;

    const menu = new Menu({
      name_food: menuData.name,
      price_food: menuData.price,
      description_food: menuData.description,
      img_food: imageFood ? imageFood.filename : "",
      type_image: imageFood ? imageFood.mimetype.slice(6) : "",
    });

    menu.save(function (err) {
      if (err) return handleError(err);
      // saved!
      res.redirect("/manager/menu");
    });
  }
    edit(req, res, next) {

    Menu.findById(req.query.id)
        .then(menuRes=> res.render("backend/menu/edit-menu", {
            layout: "backend",
            menuRes: handleMongoose.mongoosetoObject(menuRes),
            title: "Edit Menu",
          }))
        .catch(error => next(error))
   
  }

  update(req, res, next) {

    let dataUpdate = null
    const menuData = req.body ;
    if(req.body ){
         dataUpdate = {
            name_food: menuData.name,
            price_food: menuData.price,
            description_food: menuData.description,
        }
    }
    if(req.file){
        const imageFood = req.file ;
        dataUpdate = {
            ...dataUpdate,
            img_food: imageFood ? imageFood.filename : "",
            type_image: imageFood ? imageFood.mimetype.slice(6) : "",
        }
    }
    if(dataUpdate !== null){
        Menu.findByIdAndUpdate(menuData.id, { 
            ...dataUpdate
        })
        .then(()=>{
            res.redirect("/manager/menu");
        })
        .catch((error) => next(error));
    }else{
        res.redirect("/manager/menu");
    }

  }

  async delete(req, res, next) {
    const unlinkAsync = promisify(fs.unlink)
    Menu.deleteOne({ _id: req.query.id })
      .then(() => {
        res.redirect("/manager/menu");
      })
      .catch((error) => next(error));
  }
}
export default new MenuController();
