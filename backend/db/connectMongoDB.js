import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
     const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection failed");
        process.exit(1);
    }
};

export default connectMongoDB