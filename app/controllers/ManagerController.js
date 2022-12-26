import Order from "../models/OrderModel.js";


import { handleMongoose } from "../../until/mongoose.js";



class ManagerController{
    // [GET] manager
    index (req, res, next) {
              res.render('./backend/index',{
                  layout: 'backend',
                  title: "Quản lý"
              })
              
    }
    // Save menu from client
    post (req, res, next) {

        const orderData = req.body
        
        const order = new Order({ 
            number_desk: orderData.desk,
            total: orderData.total,
            foods: [...orderData.food]
         });
        
         order.save(function (err) {
            if (err) return handleError(err);
            // saved!
            console.log('Success.... !!!')
          });
       
    }
   
}

export default  new ManagerController;