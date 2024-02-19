import mongoose, { Document, Model } from "mongoose";

interface IProject extends Document {
  name: string;
  technologies: string;
  website?: string;
  github?: string;
}

const ProjectSchema = new mongoose.Schema<IProject>(
  {
    name: { type: String, required: true },
    website: String,
    technologies: { type: String, required: true },
    github: String,
  },
  { timestamps: true }
);

const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);

export default Project;
