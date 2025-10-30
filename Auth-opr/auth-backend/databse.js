import mongoose from "mongoose";

const Dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully ✅");
  } catch (error) {
    console.log("db error", error);
  }
};

export default Dbconnect;