import { EducationData, ExperienceData } from "@/types/ClientDataTypes";

interface Props {
  educationData: EducationData[];
  experienceData: ExperienceData[];
}

export default function ClientExperienceAndEducationView({
  educationData,
  experienceData,
}: Props) {
  console.log(educationData, experienceData, "experienceData");

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="experience"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="flex flex-col gap-5">
          <div className="py-6 sm:py-16">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-[70px] mb-4 text-primary-500 ">
                My Experience
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="container">
              {experienceData && experienceData.length
                ? experienceData.map((experienceItem, index) => (
                    <div key={index} className="my-4">
                      <div className="px-1 inline-block py-1 w-full  rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <div className="block bg-[#121212] hover:bg-slate-800 rounded-lg  px-5 py-2">
                          <p className="font-bold text-secondary-400">
                            {experienceItem.duration}
                          </p>
                          <h3 className="font-bold mt-2">
                            {experienceItem.company}, {experienceItem.location}
                          </h3>
                          <p className="font-extrabold mt-2">
                            {experienceItem.position}
                          </p>
                          <p className="font-extralight mt-2">
                            {experienceItem.jobdescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="py-6 sm:py-16">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium leading-[70px] mb-4 text-primary-500">
                My Education
              </h1>
            </div>
          </div>
          <div className="w-full">
            <div className="container">
              {educationData && educationData.length
                ? educationData.map((educationItem, index) => (
                    <div key={index} className="my-4">
                      <div className="px-1 inline-block py-1 w-full  rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
                        <div className="block bg-[#121212] hover:bg-slate-800 rounded-lg  px-5 py-2">
                          <p className="font-bold text-secondary-400">
                            {educationItem.year}
                          </p>
                          <h3 className="font-extrabold mt-2 ">
                            {educationItem.university}
                          </h3>
                          <p className="font-extrabold mt-2">
                            {educationItem.degree}
                          </p>
                          <p className="font-bold mt-2">
                            {educationItem.courses}
                          </p>
                          <p className="font-extralight mt-2">
                            {educationItem.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
