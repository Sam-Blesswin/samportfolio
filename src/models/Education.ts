import mongoose, { Document, Model, model } from "mongoose";

interface IEducation extends Document {
  degree: string;
  year: string;
  university: string;
}

const EducationSchema = new mongoose.Schema<IEducation>(
  {
    degree: { type: String, required: true },
    year: { type: String, required: true },
    university: { type: String, required: true },
  },
  { timestamps: true }
);

const Education: Model<IEducation> =
  mongoose.models.Education ||
  mongoose.model<IEducation>("Education", EducationSchema);

export default Education;
