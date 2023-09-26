import connectDb from "@/lib/connectDb";
import { getSubjects } from "@/lib/subjects-db";
import { createErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    try {
        await connectDb();

        const page_str = req.nextUrl.searchParams.get("page");
        const limit_str = req.nextUrl.searchParams.get("limit");

        const page = page_str ? parseInt(page_str, 10) : 1;
        const limit = limit_str ? parseInt(limit_str, 10) : 10;

        const { subjects, results, err } = await getSubjects({ page, limit });

        if (err) {
            throw err;
        }

        let json_res = {
            status: "success",
            results,
            subjects,
        };
        return NextResponse.json(json_res);
    } catch (err: any) {
        return createErrorResponse(err.message, 500);
    }
}
