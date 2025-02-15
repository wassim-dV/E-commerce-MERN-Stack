import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://joker:0lLqqefKqvjDBsAW@cluster0.zt424.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Successfully connnected to mongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;



//mongodb+srv://joker:0lLqqefKqvjDBsAW@cluster0.zt424.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


//0lLqqefKqvjDBsAW