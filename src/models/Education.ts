import mongoose, { Document, Model, model } from "mongoose";

export interface EducationDocument extends Document {
  degree: string;
  year: string;
  university: string;
}

const EducationSchema = new mongoose.Schema<EducationDocument>(
  {
    degree: { type: String, required: true },
    year: { type: String, required: true },
    university: { type: String, required: true },
  },
  { timestamps: true }
);

const Education: Model<EducationDocument> =
  mongoose.models.Education ||
  mongoose.model<EducationDocument>("Education", EducationSchema);

export default Education;
