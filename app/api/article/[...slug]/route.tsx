import connectDb from "@/lib/connectDb";
import { createErrorResponse } from "@/lib/utils";
import Article from "@/models/article";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiResponse, { params }: { params: { slug: string[] } }) {
    try {
        await connectDb();

        const urlSlug = params.slug.join("/");
        const articles = await Article.findOne({ urlSlug: urlSlug });

        let json_response = {
            status: "success",
            data: articles,
        };
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return createErrorResponse(error.message, 500);
    }
}
