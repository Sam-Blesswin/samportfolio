export interface HomeDocument {
  _id?: string;
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

export interface AboutDocument {
  _id?: string;
  aboutme: string;
  noofprojects: string;
  yearofexperience: string;
  noofclients: string;
  skills: string;
}

export interface EducationDocument {
  _id?: string;
  degree: string;
  year: string;
  university: string;
  courses: string;
  description: string;
}

export interface ExperienceDocument {
  _id?: string;
  position: string;
  company: string;
  duration: string;
  location: string;
  jobdescription: string;
}

export interface ProjectDocument {
  _id?: string;
  name: string;
  description: string;
  technologies: string;
  image: string;
  github: string;
  website?: string;
}
