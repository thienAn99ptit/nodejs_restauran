import mongoose from 'mongoose';
import mongoose_delete from'mongoose-delete';

const Schema = mongoose.Schema;

const Order = new Schema({
    number_desk: { type: Number ,default: 0},
    total: { type: Number ,default: 0},
    foods: { type: Array, default: [] },
  },{
    timestamps : true
  });

  Order.plugin(mongoose_delete, { overrideMethods: 'all' });

export default mongoose.model('Order', Order);
