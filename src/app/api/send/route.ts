import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  try {
    const data = {
      service_id: process.env.SERVICE_ID,
      template_id: process.env.TEMPLATE_ID,
      user_id: process.env.PUBLIC_KEY,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: "Sam Blesswin",
        message: message,
      },
      accessToken: process.env.ACCESS_TOKEN,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      options
    );

    console.log(response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const resData = await response.json();
    console.log(resData);

    return NextResponse.json({
      success: true,
      message: "Email sent",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error });
  }
}
