import { EducationDocument } from "@/types/DocumentDataTypes";
import mongoose, { Model } from "mongoose";

const EducationSchema = new mongoose.Schema<EducationDocument>(
  {
    degree: { type: String, required: true },
    year: { type: String, required: true },
    university: { type: String, required: true },
    courses: String,
    description: String,
  },
  { timestamps: true }
);

const Education: Model<EducationDocument> =
  mongoose.models.Education ||
  mongoose.model<EducationDocument>("Education", EducationSchema);

export default Education;
