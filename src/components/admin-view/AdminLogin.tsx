import { FormViewProps } from "@/types/FormTypes";
import FormControls from "./FormControls";

const controls = [
  {
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "Enter User name",
  },
  {
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Enter Password",
  },
];

const AdminLogin = ({ formData, setFormData, handleClick }: FormViewProps) => {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleClick}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px] text-black"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
