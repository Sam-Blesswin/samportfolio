import mongoose, { Document, Model } from "mongoose";

export interface HomeDocument extends Document {
  heading: string;
  summary: string;
  linkedin: string;
  twitter?: string;
  github: string;
  resume: string;
  profilePic: string;
}

const HomeSchema = new mongoose.Schema<HomeDocument>(
  {
    heading: { type: String, required: true },
    summary: { type: String, required: true },
    linkedin: { type: String, required: true },
    twitter: { type: String },
    resume: { type: String, required: true },
    github: { type: String, required: true },
    profilePic: { type: String, required: true },
  },
  { timestamps: true }
);

const Home: Model<HomeDocument> =
  mongoose.models.Home || mongoose.model<HomeDocument>("Home", HomeSchema);

export default Home;
