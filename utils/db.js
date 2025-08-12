const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://127.0.0.1:27017/next-minicms-db");
      console.log("connected");
    }
  } catch (error) {
    console.log("not conected ",error)
  }
};
export default connectDB