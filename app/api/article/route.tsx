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
        let error = [];

        if (!body.keywords) {
            error.push("Key words");
        }
        if (!body.date) {
            error.push("Publish date");
        }

        if (error.length > 0) {
            // return createErrorResponse(error, 400);
            return new NextResponse(JSON.stringify({ status: "fail", error: error }), {
                status: 400,
                headers: { "Content-Type": "application/json" },
            });
        }

        const article = await Article.create({
            heading: body.heading,
            subheading: body.subheading,
            finalImage: body.finalImage,
            keywords: body.keywords,
            date: body.date,
            urlSlug: body.date + "/" + body.keywords,
            mediaType: body.mediaType,
            articleType: body.articleType,
            topics: body.topics,
            subtopics: body.subtopics,
            subjects: body.subjects,
            contributors: body.contributors,
            trivia: body.trivia,
            section: body.section,
            dictionary: body.dictionary,
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
