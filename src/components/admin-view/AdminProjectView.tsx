import FormControls from "./FormControls";

const controls = [
  {
    name: "name",
    placeholder: "Project Name",
    type: "text",
    label: "Project Name",
  },
  {
    name: "technologies",
    placeholder: "Enter Technologies",
    type: "text",
    label: "Enter Technologies",
  },
  {
    name: "website",
    placeholder: "Website",
    type: "text",
    label: "Website",
  },
  {
    name: "github",
    placeholder: "Github",
    type: "text",
    label: "github",
  },
  {
    name: "description",
    placeholder: "description ",
    type: "text",
    label: "Enter description",
  },
  {
    name: "image",
    placeholder: "image ",
    type: "text",
    label: "Enter image url",
  },
];

interface ProjectItem {
  _id: string;
  name: string;
  technologies: string;
  website: string;
  github: string;
  description: string;
  image: string;
}

interface AdminProjectViewProps {
  formData: { [key: string]: any };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: any }>>;
  handleSaveData: () => void;
  data: ProjectItem[];
}

export default function AdminProjectView({
  formData,
  setFormData,
  handleSaveData,
  data,
}: AdminProjectViewProps) {
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
                  <p>{item.name}</p>
                  <p>{item.technologies}</p>
                  <p>{item.website}</p>
                  <p>{item.github}</p>
                  <p>{item.description}</p>
                  <p>{item.image}</p>
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
}
