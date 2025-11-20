import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export function GET() {
  const filePath = path.join(process.cwd(), "mnt/data/IMG_3261.JPG");
  const imageBuffer = fs.readFileSync(filePath);
  return new NextResponse(imageBuffer, {
    headers: { "Content-Type": "image/jpeg" },
  });
}
