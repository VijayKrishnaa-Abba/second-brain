import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI | ""
const MONGODB_URI =
  "mongodb+srv://abbavijaykrishna002:1bIJKllfHD17td4Z@cluster0.zjgvcgy.mongodb.net/second-brain?retryWrites=true&w=majority&appName=Cluster0";

console.log("starting connectionto DB");
export const ConnectedDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
  } catch (eror) {
    console.log(`DB Connection error: ${eror}`);
    process.exit(1);
  }
};
