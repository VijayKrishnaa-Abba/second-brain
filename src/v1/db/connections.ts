import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/second-brain";

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
