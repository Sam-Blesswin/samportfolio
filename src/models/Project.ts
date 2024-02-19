import mongoose, { Document, Model } from "mongoose";

export interface ProjectDocument extends Document {
  name: string;
  technologies: string;
  website?: string;
  github?: string;
}

const ProjectSchema = new mongoose.Schema<ProjectDocument>(
  {
    name: { type: String, required: true },
    website: String,
    technologies: { type: String, required: true },
    github: String,
  },
  { timestamps: true }
);

const Project: Model<ProjectDocument> =
  mongoose.models.Project || mongoose.model<ProjectDocument>("Project", ProjectSchema);

export default Project;
