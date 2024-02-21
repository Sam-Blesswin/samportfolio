import { AboutDocument } from "@/types/DocumentDataTypes";
import mongoose, { Model } from "mongoose";

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
