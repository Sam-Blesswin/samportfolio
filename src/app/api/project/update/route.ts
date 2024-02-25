import connectToDB from "@/database";
import Project from "@/models/Project";
import { ProjectDocument } from "@/types/DocumentDataTypes";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const extractData: ProjectDocument = await req.json();
    const { _id, name, description, technologies, image, github, website } =
      extractData;

    let updateData;

    console.log("id:" + _id);

    if (!_id) {
      updateData = await Project.create({
        name,
        description,
        technologies,
        image,
        github,
        website,
      });
    } else {
      updateData = await Project.findOneAndUpdate(
        { _id },
        {
          name,
          description,
          technologies,
          image,
          github,
          website,
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
