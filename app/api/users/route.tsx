import connectDb from "@/lib/connectDb";
import { getUsers } from "@/lib/users-db";
import { createErrorResponse } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function GET(req: any) {
    try {
        await connectDb();

        const page_str = req.nextUrl.searchParams.get("page");
        const limit_str = req.nextUrl.searchParams.get("limit");

        const page = page_str ? parseInt(page_str, 10) : 1;
        const limit = limit_str ? parseInt(limit_str, 10) : 10;

        const { users, results, err } = await getUsers({ page, limit });

        if (err) {
            throw err;
        }

        let json_res = {
            status: "success",
            results,
            users,
        };
        return NextResponse.json(json_res);
    } catch (err: any) {
        return createErrorResponse(err.message, 500);
    }
}
