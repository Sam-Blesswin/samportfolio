export interface ControlItem {
  label: string;
  placeholder: string;
  type: string;
  name: string;
}

export interface FormData {
  [key: string]: string;
}

export interface FormViewProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  handleClick: () => void;
}

export interface FormControlsProps {
  controls: ControlItem[];
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

export enum tabItems {
  home = "home",
  about = "about",
  education = "education",
  experience = "experience",
  project = "project",
}
