import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
