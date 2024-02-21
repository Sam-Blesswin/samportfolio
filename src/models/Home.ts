import { HomeDocument } from "@/types/DocumentDataTypes";
import mongoose, { Model } from "mongoose";

const HomeSchema = new mongoose.Schema<HomeDocument>(
  {
    heading: { type: String, required: true },
    summary: { type: String, required: true },
    linkedin: { type: String, required: true },
    twitter: { type: String },
    resume: { type: String, required: true },
    github: { type: String, required: true },
    profilePic: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

const Home: Model<HomeDocument> =
  mongoose.models.Home || mongoose.model<HomeDocument>("Home", HomeSchema);

export default Home;
