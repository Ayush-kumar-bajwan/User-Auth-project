import mongoose from 'mongoose';

const connectDB = async()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        if(connect){
            console.log(`MONGO DB is connected`);
        }
    } catch (error) {
        console.log("Error connection database:", error.message);
    }
}

export default connectDB;