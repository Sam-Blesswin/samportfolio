import { Document } from "mongoose";

export interface HomeDocument extends Document {
  heading: string;
  summary: string;
  linkedin: string;
  twitter?: string;
  github: string;
  resume: string;
  profilePic: string;
  email: string;
  phone: string;
}

export interface AboutDocument extends Document {
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: string;
}

export interface EducationDocument extends Document {
  degree: string;
  year: string;
  university: string;
  courses: string;
  description: string;
}

export interface ExperienceDocument extends Document {
  position: string;
  company: string;
  duration: string;
  location: string;
  jobdescription: string;
}

export interface ProjectDocument extends Document {
  name: string;
  description: string;
  technologies: string;
  image: string;
  github: string;
  website?: string;
}
