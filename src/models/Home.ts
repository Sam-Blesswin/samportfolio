import mongoose, { Document, Model } from "mongoose";


export interface HomeDocument extends Document {
  heading: string;
  summary: string;
  linkedinUrl: string;
  twitterUrl?: string;
  leetcodeUrl?: string;
  resume: string;
  githubUrl: string;
}

const HomeSchema = new mongoose.Schema<HomeDocument>(
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

const Home: Model<HomeDocument> =
  mongoose.models.Home || mongoose.model<HomeDocument>("Home", HomeSchema);

export default Home;
