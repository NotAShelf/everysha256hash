import { NextRequest, NextResponse } from "next/server";
import { createHash } from "crypto";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const start = parseInt(searchParams.get("start") || "0", 10);
    const count = parseInt(searchParams.get("count") || "100", 10);

    if (isNaN(start) || isNaN(count) || count <= 0) {
      return NextResponse.json(
        { error: "Invalid start or count value." },
        { status: 400 },
      );
    }

    const hashes: string[] = [];
    for (let i = start; i < start + count; i++) {
      const hash = createHash("sha256").update(i.toString()).digest("hex");
      hashes.push(hash);
    }

    return NextResponse.json(hashes);
  } catch (error) {
    console.error("Error generating hashes:", error);
    return NextResponse.json([], { status: 500 });
  }
}
