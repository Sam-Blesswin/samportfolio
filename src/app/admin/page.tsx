"use client";

import AdminAboutView from "@/components/admin-view/AdminAboutView";
import AdminHomeView from "@/components/admin-view/AdminHomeView";
import AdminEducationView from "@/components/admin-view/AdminEducationView";
import AdminExperienceView from "@/components/admin-view/AdminExperienceView";
import AdminProjectView from "@/components/admin-view/AdminProjectView";

import { useEffect, useState } from "react";
import { getData, addData, updateData } from "@/services";
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
  jobdescription: "",
};

const initialEducationFormData: FormData = {
  degree: "",
  year: "",
  university: "",
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
  const [currentSelectedTab, setCurrentSelectedTab] = useState(tabItems.home);

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

    if (
      currentSelectedTab === tabItems.about ||
      currentSelectedTab === tabItems.home
    ) {
      const response = await updateData(
        currentSelectedTab,
        dataMap[currentSelectedTab]
      );

      console.log(response);

      if (response.success) {
        extractAllDatas();
      }
    } else {
      const response = await addData(
        currentSelectedTab,
        dataMap[currentSelectedTab]
      );

      console.log(response);

      if (response.success) {
        resetFormDatas();
        extractAllDatas();
      }
    }
  }

  function resetFormDatas() {
    setExperienceViewFormData(initialExperienceFormData);
    setEducationViewFormData(initialEducationFormData);
    setProjectViewFormData(initialProjectFormData);
  }

  const menuItems = [
    {
      id: "home",
      label: "Home",
      component: (
        <AdminHomeView
          formData={homeViewFormData}
          setFormData={setHomeViewFormData}
          handleClick={handleSaveData}
        />
      ),
    },
    {
      id: "about",
      label: "About",
      component: (
        <AdminAboutView
          formData={aboutViewFormData}
          setFormData={setAboutViewFormData}
          handleClick={handleSaveData}
        />
      ),
    },
    {
      id: "experience",
      label: "Experience",
      component: (
        <AdminExperienceView
          formData={experienceViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setExperienceViewFormData}
          data={allData?.experience}
        />
      ),
    },
    {
      id: "education",
      label: "Education",
      component: (
        <AdminEducationView
          formData={educationViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setEducationViewFormData}
          data={allData?.education}
        />
      ),
    },
    {
      id: "project",
      label: "Project",
      component: (
        <AdminProjectView
          formData={projectViewFormData}
          handleSaveData={handleSaveData}
          setFormData={setProjectViewFormData}
          data={allData?.project}
        />
      ),
    },
  ];

  async function extractAllDatas() {
    const response = await getData(currentSelectedTab);
    console.log(response);

    if (
      currentSelectedTab === tabItems.about &&
      response &&
      response.data &&
      response.data.length
    ) {
      setAboutViewFormData(response.data[0]);
    } else if (
      currentSelectedTab === tabItems.home &&
      response &&
      response.data &&
      response.data.length
    ) {
      setHomeViewFormData(response && response.data[0]);
    } else {
      if (response?.success) {
        setAllData({
          ...allData,
          [currentSelectedTab]: response && response.data,
        });
      }
    }

    console.log(`${currentSelectedTab} ✅ Data extracted`);
  }

  console.log("allData", allData);

  useEffect(() => {
    extractAllDatas();
  }, [currentSelectedTab]);

  return (
    <div>
      <nav className="-mb-0.5 flex justify-center spcae-x-6">
        {menuItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`p-4 font-bold text-xl ${
              item.id === currentSelectedTab ? "text-green-500" : "text-white"
            }`}
            onClick={() => {
              setCurrentSelectedTab(item.id as tabItems);
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
