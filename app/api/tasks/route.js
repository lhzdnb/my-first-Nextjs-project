import db from "@/utils/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  const tasks = await db.task.findMany({});
  return NextResponse.json({ data: tasks });
}

export async function POST(request) {
  const data = await request.json();
  const task = db.task.create({
    data: {
      content: data.content,
    },
  });
  return Response.json({ data: task });
}
