import { ExperienceDocument } from "@/types/DocumentDataTypes";
import mongoose, { Model } from "mongoose";

const ExperienceSchema = new mongoose.Schema<ExperienceDocument>(
  {
    position: { type: String, required: true },
    company: { type: String, required: true },
    duration: { type: String, required: true },
    location: { type: String, required: true },
    jobdescription: { type: String, required: true },
  },
  { timestamps: true }
);

const Experience: Model<ExperienceDocument> =
  mongoose.models.Experience ||
  mongoose.model<ExperienceDocument>("Experience", ExperienceSchema);

export default Experience;
