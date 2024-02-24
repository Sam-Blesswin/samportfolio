import { FormData, tabItems } from "@/types/FormTypes";

export async function getData(currentTab: tabItems) {
  try {
    const response = await fetch(`/api/${currentTab}/get`, {
      method: "GET",
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function addData(currentTab: tabItems, formData: FormData) {
  try {
    const response = await fetch(`/api/${currentTab}/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function updateData(currentTab: tabItems, formData: FormData) {
  try {
    const response = await fetch(`/api/${currentTab}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteData(currentTab: tabItems, id: string) {
  try {
    const response = await fetch(`/api/${currentTab}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}

export async function login(formData: FormData) {
  try {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    return result;
  } catch (e) {
    console.log(e);
  }
}
