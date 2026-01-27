import mongoose from "mongoose";
import 'dotenv/config';

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Database Connected!");
    })
    .catch((error) => {
        console.log("Error");
        console.error(error.message);
        process.exit(1);
    })
}

export default dbConnect;