import React from "react";
import { FormControlsProps } from "../../types/FormTypes";

const FormControls = ({
  controls,
  formData,
  setFormData,
}: FormControlsProps) => {
  return (
    <div>
      {controls.map((controlItem) => (
        <div className="mb-4" key={controlItem.name}>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {controlItem.label}
          </label>
          <input
            placeholder={controlItem.placeholder}
            type={controlItem.type}
            name={controlItem.name}
            id={controlItem.name}
            value={formData[controlItem.name]}
            onChange={(e) => {
              setFormData((prevFormData) => ({
                ...prevFormData,
                [controlItem.name]: e.target.value,
              }));
            }}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 tracking-wide focus:outline-none focus:shadow-outline"
          />
        </div>
      ))}
    </div>
  );
};

export default FormControls;
