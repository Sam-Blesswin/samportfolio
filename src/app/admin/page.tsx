"use client";

import AdminAboutView from "@/components/admin-view/AdminAboutView";
import { useEffect, useState } from "react";
import { getData, updateData } from "@/services";
import { FormData, tabItems } from "@/types/FormTypes";

const initialHomeFormData: FormData = {
  heading: "",
  summary: "",
};

const initialAboutFormData: FormData = {
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData: FormData = {
  position: "",
  company: "",
  duration: "",
  location: "",
  jobprofile: "",
};

const initialEducationFormData: FormData = {
  degree: "",
  year: "",
  college: "",
};

const initialProjectFormData: FormData = {
  name: "",
  website: "",
  technologies: "",
  github: "",
};

const initialLoginFormData: FormData = {
  username: "",
  password: "",
};

interface DataMap {
  [key: string]: FormData;
}

export default function AdminView() {
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems.about);
  const [homeViewFormData, setHomeViewFormData] = useState(initialHomeFormData);
  const [aboutViewFormData, setAboutViewFormData] =
    useState(initialAboutFormData);
  const [experienceViewFormData, setExperienceViewFormData] = useState(
    initialExperienceFormData
  );
  const [educationViewFormData, setEducationViewFormData] = useState(
    initialEducationFormData
  );
  const [projectViewFormData, setProjectViewFormData] = useState(
    initialProjectFormData
  );

  const [allData, setAllData] = useState({});

  async function handleSaveData() {
    const dataMap: DataMap = {
      home: homeViewFormData,
      about: aboutViewFormData,
      education: educationViewFormData,
      experience: experienceViewFormData,
      project: projectViewFormData,
    };

    const response = await updateData(
      currentSelectedTab,
      dataMap[currentSelectedTab]
    );
    console.log(response, "response");

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
    }
  }

  function resetFormDatas() {
    setHomeViewFormData(initialHomeFormData);
    setAboutViewFormData(initialAboutFormData);
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  const menuItems = [
    {
      id: tabItems.about,
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleClick={handleSaveData}
        />
      ),
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);

    if (
      currentSelectedTab === "about" &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response.data[0]);
    }

    if (response?.success) {
      setAllData({
        ...allData,
        [currentSelectedTab]: response && response.data,
      });
    }

    console.log("✅ Data extracted");
  }

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  return (
    <div>
      <nav className="-mb-0.5 flex justify-center spcae-x-6" role="tablist">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="p-4 font-bold text-xl"
            onClick={() => {
              setCurrentSelectedTab(item.id);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="mt-10 p-10">
        {menuItems.map(
          (item) =>
            item.id === currentSelectedTab && (
              <div key={item.id}>{item.component}</div>
            )
        )}
      </div>
    </div>
  );
}
