import mongoose from "mongoose";

const Connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://raiyan:raiyan2002@cluster0.0wvpgdb.mongodb.net/blogs"
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
};

export default Connectdb;
