import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/restaurant');
        console.log('connect successfully');
    } catch (error) {
        console.log('connect failly');
        
    }
}

export {connect};