import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Desk = new Schema({
    number_desk: { type: Number, default: NaN },
    booked: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
  });

export default mongoose.model('Desk', Desk);
