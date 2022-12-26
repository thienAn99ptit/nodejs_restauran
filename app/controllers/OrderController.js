import Order from "../models/OrderModel.js";

import moment from'moment';

import { handleMongoose } from "../../until/mongoose.js";



class OrderController{
    
    // [GET] manager/order
    show (req, res, next) {

        let today2 = new Date();
        const dd = String(today2.getDate()).padStart(2, '0');
        const mm = String(today2.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today2.getFullYear();

        today2 = mm + '/' + dd + '/' + yyyy;
        const today = moment().startOf('day')

        Order.find({
            createdAt: {
                $gte: today.toDate(),
              },
        })
          .then(order=> {
              res.render('backend/order/order',{
                  layout: 'backend',
                  order: handleMongoose.multipleMongooseToObject(order),
                  title: 'Order',
                  day: today2
              })
          })
          .catch(error => next(error))
    }
    // [GET]
    confirm (req, res, next){
        Order.delete({ _id: req.params['id'] })
        .then(()=>{
            res.redirect('/manager/order')
        })
        .catch(error=> next(error))
    }

    // [GET]
    json (req, res, next){
        let today2 = new Date();
        const dd = String(today2.getDate()).padStart(2, '0');
        const mm = String(today2.getMonth() + 1).padStart(2, '0'); //January is 0!
        const yyyy = today2.getFullYear();

        today2 = mm + '/' + dd + '/' + yyyy;
        const today = moment().startOf('day')

        Order.find({
            createdAt: {
                $gte: today.toDate(),
              },
        })
          .then(order=> {
              res.status(200).json({order})
          })
          .catch(error => next(error))
    }
   
}

export default  new OrderController;