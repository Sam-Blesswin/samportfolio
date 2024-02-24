"use client";

import AdminAboutView from "@/components/admin-view/AdminAboutView";
import AdminHomeView from "@/components/admin-view/AdminHomeView";
import AdminEducationView from "@/components/admin-view/AdminEducationView";
import AdminExperienceView from "@/components/admin-view/AdminExperienceView";
import AdminProjectView from "@/components/admin-view/AdminProjectView";
import AdminLogin from "@/components/admin-view/AdminLogin";

import { useEffect, useState } from "react";
import { getData, updateData, deleteData, login } from "@/services";
import { FormData, tabItems } from "@/types/FormTypes";

const initialHomeFormData: FormData = {
  _id: "",
  heading: "",
  summary: "",
  linkedin: "",
  twitter: "",
  github: "",
  resume: "",
  profilePic: "",
  email: "",
  phone: "",
};

const initialAboutFormData: FormData = {
  _id: "",
  aboutme: "",
  noofprojects: "",
  yearofexperience: "",
  noofclients: "",
  skills: "",
};

const initialExperienceFormData: FormData = {
  _id: "",
  position: "",
  company: "",
  duration: "",
  location: "",
  jobdescription: "",
};

const initialEducationFormData: FormData = {
  _id: "",
  degree: "",
  year: "",
  university: "",
  courses: "",
  description: "",
};

const initialProjectFormData: FormData = {
  _id: "",
  name: "",
  description: "",
  technologies: "",
  image: "",
  github: "",
  website: "",
};

const initialLoginFormData: FormData = {
  username: "",
  password: "",
};

interface DataMap {
  [key: string]: FormData;
}

interface AllData {
  [key: string]: any;
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
  const [allData, setAllData] = useState<AllData>({});

  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [authUser, setAuthUser] = useState(false);

  async function handleDeleteData(id: string) {
    const response = await deleteData(currentSelectedTab, id);

    console.log(response);

    if (response.success) {
      extractAllDatas();
    }
  }

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

    console.log(response);

    if (response.success) {
      resetFormDatas();
      extractAllDatas();
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
          handleDeleteData={handleDeleteData}
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
          handleDeleteData={handleDeleteData}
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
          handleDeleteData={handleDeleteData}
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

  useEffect(() => {
    if (authUser) {
      extractAllDatas();
    }
  }, [currentSelectedTab, authUser]);

  async function handleLogin() {
    const res = await login(loginFormData);

    console.log(res, "login");

    if (res?.success) {
      setAuthUser(true);
    }
  }

  if (!authUser) {
    return (
      <AdminLogin
        formData={loginFormData}
        setFormData={setLoginFormData}
        handleClick={handleLogin}
      />
    );
  }

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
