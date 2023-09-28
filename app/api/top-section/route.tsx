import connectDb from "@/lib/connectDb";
import { getTopics } from "@/lib/topics-db";
import { getSubtopics } from "@/lib/subtopics-db";
import { getSubjects } from "@/lib/subjects-db";
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

        const { topics, results, err } = await getTopics({ page, limit });
        const { subtopics } = await getSubtopics({ page, limit });
        const { subjects } = await getSubjects({ page, limit });
        const { users } = await getUsers({ page, limit });

        if (err) {
            throw err;
        }

        let json_res = {
            status: "success",
            results,
            topics,
            subtopics,
            subjects,
            contributors: users,
        };
        return NextResponse.json(json_res);
    } catch (err: any) {
        return createErrorResponse(err.message, 500);
    }
}
