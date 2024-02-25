import ClientAboutView from "@/components/client-view/About";
import ClientContactView from "@/components/client-view/Contact";
import ClientExperienceAndEducationView from "@/components/client-view/Experience";
import Footer from "@/components/client-view/Footer";
import ClientHomeView from "@/components/client-view/Home";
import Navbar from "@/components/client-view/Navbar";
import ClientProjectView from "@/components/client-view/Project";
import connectToDB from "@/database";
import About from "@/models/About";
import Education from "@/models/Education";
import Experience from "@/models/Experience";
import Home from "@/models/Home";
import Project from "@/models/Project";

const sectionModelMap: { [key: string]: any } = {
  about: About,
  home: Home,
  education: Education,
  experience: Experience,
  project: Project,
};

async function extractAllDatas(currentSection: string) {
  try {
    if (process.env.MODE === "build") {
      await connectToDB();

      const model = sectionModelMap[currentSection];

      const extractData: any = await model.find({});
      return extractData;
    } else {
      const response = await fetch(
        `${process.env.API_URL}/${currentSection}/get`,
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }

      const data = await response.json();
      return data && data.data ? data.data : null;
    }
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
}

export default async function HomePage() {
  const homeSectionData = await extractAllDatas("home");
  const aboutSectionData = await extractAllDatas("about");
  const experienceSectionData = await extractAllDatas("experience");
  const educationSectionData = await extractAllDatas("education");
  const projectSectionData = await extractAllDatas("project");

  return (
    <div>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <ClientHomeView data={homeSectionData[0]} />
        <ClientAboutView data={aboutSectionData[0]} />
        <ClientExperienceAndEducationView
          educationData={educationSectionData}
          experienceData={experienceSectionData}
        />
        <ClientProjectView data={projectSectionData} />
        <ClientContactView data={homeSectionData[0]} />
      </div>
      <Footer />
    </div>
  );
}
