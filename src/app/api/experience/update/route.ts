import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { ExperienceDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const extractData: ExperienceDocument = await req.json();
    const { _id, position, company, duration, location, jobdescription } =
      extractData;

    let updateData;

    console.log("id:" + _id);

    if (!_id) {
      updateData = await Experience.create({
        position,
        company,
        duration,
        location,
        jobdescription,
      });
    } else {
      updateData = await Experience.findOneAndUpdate(
        { _id },
        {
          position,
          company,
          duration,
          location,
          jobdescription,
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
