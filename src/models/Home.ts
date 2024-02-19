import mongoose, { Document, Model } from "mongoose";

// Updated interface to include new fields
interface IHome extends Document {
  heading: string;
  summary: string;
  linkedinUrl: string;
  twitterUrl?: string;
  leetcodeUrl?: string;
  resume: string;
  githubUrl: string;
}

// Updated schema to include new fields
const HomeSchema = new mongoose.Schema<IHome>(
  {
    heading: { type: String, required: true },
    summary: { type: String, required: true },
    linkedinUrl: { type: String, required: true },
    twitterUrl: { type: String },
    leetcodeUrl: { type: String },
    resume: { type: String, required: true },
    githubUrl: { type: String, required: true },
  },
  { timestamps: true }
);

// Model creation remains the same
const Home: Model<IHome> =
  mongoose.models.Home || mongoose.model<IHome>("Home", HomeSchema);

export default Home;
