import FormControls from "./FormControls";
import { ControlItem, FormViewProps } from "@/types/FormTypes";

const controls: ControlItem[] = [
  {
    name: "heading",
    placeholder: "Enter heading text",
    type: "text",
    label: "Enter heading text",
  },
  {
    name: "summary",
    placeholder: "Enter Career summary",
    type: "text",
    label: "Enter Career summary",
  },
  {
    name: "linkedin",
    placeholder: "Enter linkedin",
    type: "text",
    label: "Enter linkedin",
  },
  {
    name: "twitter",
    placeholder: "Enter twitter",
    type: "text",
    label: "Enter twitter",
  },
  {
    name: "github",
    placeholder: "Enter github",
    type: "text",
    label: "Enter github",
  },
  {
    name: "resume",
    placeholder: "Enter resume",
    type: "text",
    label: "Enter resume",
  },

  {
    name: "profilePic",
    placeholder: "Enter profilePic",
    type: "text",
    label: "Enter profilePic",
  },
  {
    name: "email",
    placeholder: "Enter email",
    type: "text",
    label: "Enter email",
  },
  {
    name: "phone",
    placeholder: "Enter phone",
    type: "text",
    label: "Enter phone",
  },
];

const AdminHomeView = ({
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
          onClick={() => handleClick()}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] text-black"
        >
          Add Info
        </button>
      </div>
    </div>
  );
};

export default AdminHomeView;
