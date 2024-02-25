import connectToDB from "@/database";
import About from "@/models/About";
import { AboutDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const extractData: AboutDocument = await req.json();
    const {
      _id,
      aboutme,
      noofprojects,
      yearofexperience,
      noofclients,
      skills,
    } = extractData;

    //when a new document is added id is null
    let filter = {};

    if (_id != "") {
      filter = { _id: _id };
    }

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const updateData = await About.findOneAndUpdate(
      filter,
      { aboutme, noofprojects, yearofexperience, noofclients, skills },
      options
    );

    if (updateData) {
      return NextResponse.json({
        success: true,
        message: "updated successfully",
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
