import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://samblesswinedu:l2saWhZQD6Yr4qQX@cluster0.hzvqkzy.mongodb.net/SamPortfolio?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
