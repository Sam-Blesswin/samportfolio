import connectToDB from "@/database";
import Education, { EducationDocument } from "@/models/Education";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractData: EducationDocument[] = await Education.find({});

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
