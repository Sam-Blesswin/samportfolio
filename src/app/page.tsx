import ClientAboutView from "@/components/client-view/About";
import ClientContactView from "@/components/client-view/Contact";
import ClientExperienceAndEducationView from "@/components/client-view/Experience";
import Footer from "@/components/client-view/Footer";
import ClientHomeView from "@/components/client-view/Home";
import Navbar from "@/components/client-view/Navbar";
import ClientProjectView from "@/components/client-view/Project";

async function extractAllDatas(currentSection: string) {
  const res = await fetch(`${process.env.API_URL}/${currentSection}/get`, {
    method: "GET",
  });

  const data = await res.json();
  return data && data.data;
}

export default async function Home() {
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
