import {router as managerRouter}   from "./manager.js";
import {router as foodRouter}   from "./food.js";
import {router as orderRouter}   from "./order.js";
import {router as homeRouter}   from "./home.js";


function route(app) {

  app.use('/order', orderRouter)
  
  app.use('/food', foodRouter)

  app.use('/manager', managerRouter)
  
  app.use('/', homeRouter)
}

export default route;