import mongoose from "mongoose";
import "dotenv/config";

    process.env.NODE_ENV === "production" 
    ? mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.xqea7mj.mongodb.net/?retryWrites=true&w=majority`)
    : mongoose.connect('mongodb://localhost:27017/test') 

    

export default mongoose;