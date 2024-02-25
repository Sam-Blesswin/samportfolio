import connectToDB from "@/database";
import Education from "@/models/Education";
import { EducationDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const extractData: EducationDocument = await req.json();
    const { _id, degree, year, university, courses, description } = extractData;

    let updateData;

    console.log("id:" + _id);

    if (!_id) {
      updateData = await Education.create({
        degree,
        year,
        university,
        courses,
        description,
      });
    } else {
      updateData = await Education.findOneAndUpdate(
        { _id },
        {
          degree,
          year,
          university,
          courses,
          description,
        }
      );
    }

    if (updateData) {
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
