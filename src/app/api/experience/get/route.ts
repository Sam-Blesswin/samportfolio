import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { ExperienceDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();
    const extractData: ExperienceDocument[] = await Experience.find({});

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
