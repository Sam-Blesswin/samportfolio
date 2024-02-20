import FormControls from "./FormControls";
import { ControlItem } from "@/types/FormTypes";

const controls: ControlItem[] = [
  {
    name: "degree",
    placeholder: "Degree Name",
    type: "text",
    label: "Enter Degree Name",
  },
  {
    name: "year",
    placeholder: "Year",
    type: "text",
    label: "Year",
  },
  {
    name: "university",
    placeholder: "University Name",
    type: "text",
    label: "Enter University Name",
  },
];

interface EducationItem {
  _id: string;
  degree: string;
  year: string;
  university: string;
}

interface AdminEducationViewProps {
  handleSaveData: () => void;
  formData: { [key: string]: any };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  data: EducationItem[];
}

const AdminEducationView = ({
  handleSaveData,
  formData,
  setFormData,
  data,
}: AdminEducationViewProps) => {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  className="flex flex-col gap-4 border p-4 border-green-600 text-black"
                  key={item._id}
                >
                  <p>{item.degree}</p>
                  <p>{item.university}</p>
                  <p>{item.year}</p>
                </div>
              ))
            : null}
        </div>
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
  );
};

export default AdminEducationView;
