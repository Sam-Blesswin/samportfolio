import mongoose, { Document, Model } from "mongoose";

export interface AboutDocument extends Document {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: string;
}

const AboutSchema = new mongoose.Schema<AboutDocument>(
  {
    aboutme: { type: String, required: true },
    noofprojects: { type: String, required: true },
    yearofexperience: { type: String, required: true },
    noofclients: { type: String, required: true },
    skills: { type: String, required: true },
  },
  { timestamps: true }
);

const About: Model<AboutDocument> =
  mongoose.models.About || mongoose.model<AboutDocument>("About", AboutSchema);

export default About;
