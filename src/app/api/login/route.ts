import connectToDB from "@/database";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    await connectToDB();
    const { username, password } = await req.json();

    const user = await User.findOne({ username: username, password: password });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User is not present !Please try again",
      });
    }

    return NextResponse.json({
      success: true,
      message: "Login successfull",
    });
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something goes wrong !Please try again",
    });
  }
}
