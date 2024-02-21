import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { ExperienceDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("hello");
    await connectToDB();
    console.log(req);
    const extractData: ExperienceDocument = await req.json();
    console.log(extractData);
    const saveData = await Experience.create(extractData);

    if (saveData) {
      return NextResponse.json({
        success: true,
        message: "Data saved successfully",
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Something goes wrong !Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
}
