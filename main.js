  import express from 'express';
  import cors from 'cors';
  import  path from 'path';
  import { fileURLToPath } from 'url';
  import { engine } from 'express-handlebars';
  import route from  './routes/index.js';
  import { connect as dbConnect} from './config/db/index.js';



  // const morgan = require('morgan')
  // const handlebars = require('express-handlebars')

  const __filename = fileURLToPath(import.meta.url);

  const __dirname = path.dirname(__filename);

  const app = express()

  const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
  app.use(cors());



  const port = 3000
  // Template engine

  app.use(express.urlencoded({
    extended: true
  }));
  app.use(express.json());

  // Static file
  app.use(express.static(path.join(__dirname,'public')))


  app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: {
      sum: (a,b) => a+b ,
      convertMoney: (price) => {
        return Number(price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
      },
      ifCond : (v1, operator, v2)=>{
          switch (operator) {
            case '!=':
                return (v1 != v2) ? true : false;
            
        }
      }
  }
  }));
  app.set('view engine', '.hbs');
  app.set('views', './views');

  // Route
  route(app);
  // Connect DB
  dbConnect();



  // app.use(morgan('combined'))

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

//   {{#if foods.1.name}}
//   <tr>
//           <td>
//               {{foods.1.name}}
//           </td>
//           <td>
//               {{foods.1.number}}
//           </td>
//       </tr>
//   {{/if}}
//   {{#if foods.2.name}}
//   <tr>
//           <td>
//               {{foods.2.name}}
//           </td>
//           <td>
//               {{foods.2.number}}
//           </td>
//       </tr>
//   {{/if}}

// </tr> 