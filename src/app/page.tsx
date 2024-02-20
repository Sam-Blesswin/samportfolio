import ClientAboutView from "@/components/client-view/About";
import ClientContactView from "@/components/client-view/Contact";
import ClientExperienceAndEducationView from "@/components/client-view/Experience";
import ClientHomeView from "@/components/client-view/Home";
import ClientProjectView from "@/components/client-view/Project";

async function extractAllDatas(currentSection) {
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
      <ClientHomeView data={homeSectionData} />
      <ClientAboutView data={aboutSectionData} />
      <ClientExperienceAndEducationView
        educationData={educationSectionData}
        experienceData={experienceSectionData}
      />
      <ClientProjectView data={projectSectionData} />
      <ClientContactView />
    </div>
  );
}
