import connectToDB from "@/database";
import Education from "@/models/Education";
import { NextResponse } from "next/server";

export async function DELETE(req: Request) {
  try {
    await connectToDB();
    const data = await req.json();
    console.log(data.id);
    const extractData = await Education.deleteOne({ _id: data.id });

    if (extractData) {
      return NextResponse.json({
        success: true,
        data: extractData,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something went wrong !Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong !Please try again",
    });
  }
}
