import ClientAboutView from "@/components/client-view/About";
import ClientContactView from "@/components/client-view/Contact";
import ClientExperienceAndEducationView from "@/components/client-view/Experience";
import Footer from "@/components/client-view/Footer";
import ClientHomeView from "@/components/client-view/Home";
import Navbar from "@/components/client-view/Navbar";
import ClientProjectView from "@/components/client-view/Project";
import { tabItems } from "@/types/FormTypes";

async function extractAllDatas(currentSection: tabItems) {
  try {
    const response = await fetch(
      `${process.env.URL}/api/${currentSection}/get`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data && data.data ? data.data : null;
  } catch (error) {
    console.error(`An error occurred: ${error}`);
    return null;
  }
}

export default async function HomePage() {
  const homeSectionData = await extractAllDatas(tabItems.home);
  const aboutSectionData = await extractAllDatas(tabItems.about);
  const experienceSectionData = await extractAllDatas(tabItems.experience);
  const educationSectionData = await extractAllDatas(tabItems.education);
  const projectSectionData = await extractAllDatas(tabItems.project);

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
