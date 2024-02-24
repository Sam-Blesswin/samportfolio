import FormControls from "./FormControls";
import React, { useRef, useEffect } from "react";

const controls = [
  {
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    name: "jobdescription",
    placeholder: "Job Description",
    type: "text",
    label: "Job Description",
  },
];

interface ExperienceItem {
  _id: string;
  position: string;
  company: string;
  duration: string;
  location: string;
  jobDescription: string;
}

interface AdminExperienceViewProps {
  formData: { [key: string]: any };
  handleSaveData: () => void;
  handleDeleteData: (id: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  data: ExperienceItem[];
}

const AdminExperienceView = ({
  formData,
  handleSaveData,
  handleDeleteData,
  setFormData,
  data,
}: AdminExperienceViewProps) => {
  const formRef = useRef(null);

  useEffect(() => {
    if (formData && formData._id && formRef.current) {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [formData]);
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col gap-4 border p-4 border-green-600 text-black"
                >
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobDescription}</p>
                  <button
                    onClick={() => {
                      setFormData(item);
                    }}
                    className="flex p-4 bg-green-600 text-black"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteData(item._id)}
                    className="flex  p-4 bg-red-600 text-black"
                  >
                    Delete
                  </button>
                </div>
              ))
            : null}
        </div>
        <div ref={formRef}>
          <FormControls
            controls={controls}
            formData={formData}
            setFormData={setFormData}
          />
          <button
            onClick={() => handleSaveData()}
            className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] text-black"
          >
            Add Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminExperienceView;
