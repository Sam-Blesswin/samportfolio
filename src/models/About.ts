import mongoose, { Document, Model } from "mongoose";

interface IAbout extends Document {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: string;
}

const AboutSchema = new mongoose.Schema<IAbout>(
  {
    aboutme: { type: String, required: true },
    noofprojects: { type: String, required: true },
    yearofexperience: { type: String, required: true },
    noofclients: { type: String, required: true },
    skills: { type: String, required: true },
  },
  { timestamps: true }
);

const About: Model<IAbout> =
  mongoose.models.About || mongoose.model<IAbout>("About", AboutSchema);

export default About;
