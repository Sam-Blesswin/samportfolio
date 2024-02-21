import { ProjectDocument } from "@/types/DocumentDataTypes";
import mongoose, { Model } from "mongoose";

const ProjectSchema = new mongoose.Schema<ProjectDocument>(
  {
    name: { type: String, required: true },
    website: String,
    technologies: { type: String, required: true },
    github: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Project: Model<ProjectDocument> =
  mongoose.models.Project ||
  mongoose.model<ProjectDocument>("Project", ProjectSchema);

export default Project;
