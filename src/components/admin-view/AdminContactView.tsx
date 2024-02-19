import React from "react";

interface ContactItem {
  name: string;
  email: string;
  message: string;
}

interface AdminContactViewProps {
  data: ContactItem[];
}

const AdminContactView = ({ data }: AdminContactViewProps) => {
  return (
    <div className="flex flex-col gap-5">
      {data && data.length
        ? data.map((item, index) => (
            <div className="p-5 border" key={index}>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.message}</p>
            </div>
          ))
        : null}
    </div>
  );
};

export default AdminContactView;
