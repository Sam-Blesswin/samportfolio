export interface HomeData {
  heading: string;
  summary: string;
  linkedin: string;
  twitter?: string;
  github: string;
  resume: string;
  profilePic: string;
}

export interface AboutData {
  aboutme: string;
  noofclients: string;
  noofprojects: string;
  skills: string;
  yearofexperience: string;
}

export interface EducationData {
  degree: string;
  year: string;
  university: string;
  courses: string;
  description: string;
}

export interface ExperienceData {
  position: string;
  company: string;
  duration: string;
  location: string;
  jobdescription: string;
}
