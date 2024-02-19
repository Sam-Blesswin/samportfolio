import mongoose, { Document, Model } from "mongoose";

interface IExperience extends Document {
  position: string;
  company: string;
  duration: string;
  location: string;
  jobdescription: string;
}

const ExperienceSchema = new mongoose.Schema<IExperience>(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    location: { type: String, required: true },
    jobdescription: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience: Model<IExperience> =
  mongoose.models.Experience ||
  mongoose.model<IExperience>("Experience", ExperienceSchema);

export default Experience;
