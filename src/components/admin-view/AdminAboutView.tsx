import FormControls from "./FormControls";
import { ControlItem, FormViewProps } from "@/types/FormTypes";

const controls: ControlItem[] = [
  {
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

const AdminAboutView = ({
  formData,
  setFormData,
  handleClick,
}: FormViewProps) => {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleClick("about")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] text-black"
        >
          Add Info
        </button>
      </div>
    </div>
  );
};

export default AdminAboutView;
