import connectDb from "@/lib/connectDb";
import { createErrorResponse } from "@/lib/utils";
import Article from "@/models/article";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDb();

        const articles = await Article.find({});

        let json_response = {
            status: "success",
            data: articles,
            length: articles.length,
        };
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        return createErrorResponse(error.message, 500);
    }
}

export async function POST(request: Request) {
    try {
        await connectDb();

        const body = await request.json();

        if (!body.urlSlug) {
            return createErrorResponse("Article must have a url slug", 400);
        }
        if (!body.date) {
            return createErrorResponse("Article must have a public date", 400);
        }

        const article = await Article.create({
            heading: body.heading,
            subheading: body.subheading,
            finalImage: body.finalImage,
            urlSlug: body.urlSlug,
            date: body.date,
            mediaType: body.mediaType,
            articleType: body.articleType,
            topics: body.topics,
            subtopics: body.subtopics,
            subjects: body.subjects,
            contributors: body.contributors,
            trivia: body.trivia,
        });

        let json_response = {
            status: "success",
            data: article,
        };
        return new NextResponse(JSON.stringify(json_response), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: any) {
        if (error.code === 11000) {
            return createErrorResponse("Article with url slug already exists", 409);
        }

        return createErrorResponse(error.message, 500);
    }
}
