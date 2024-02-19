import connectToDB from "@/database";
import Home, { HomeDocument } from "@/models/Home";
import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    await connectToDB();

    const extractData: HomeDocument = await req.json();
    const { _id, heading, summary } = extractData;

    let filter = {};

    if (_id) {
      filter = { _id: _id };
    }

    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    const updateData = await Home.findOneAndUpdate(
      filter,
      { heading, summary },
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
