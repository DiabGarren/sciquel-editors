import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(req: NextRequest) {
    const data = await req.formData();
    const file: File | null = data.get("file") as unknown as File;

    if (!file) {
        return NextResponse.json({
            status: "error",
            message: "No file provided",
        });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    console.log(file.name);

    const path = join(process.cwd(), `/public/images/${file.name}`);
    await writeFile(path, buffer);

    console.log("Image uploaded successfully");
    return NextResponse.json({
        status: "success",
        message: "Image uploaded successfully",
    });
}
