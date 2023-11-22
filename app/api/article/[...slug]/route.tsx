import connectDb from "@/lib/connectDb";
import { createErrorResponse } from "@/lib/utils";
import Article from "@/models/article";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { slug: string[] } }) {
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

export async function PUT(request: Request, { params }: { params: { slug: string[] } }) {
    try {
        await connectDb();

        const body = await request.json();
        const urlSlug = params.slug.join("/");

        const articles = await Article.updateOne(
            { urlSlug: urlSlug },
            {
                heading: body.heading,
                subheading: body.subheading,
                finalImage: body.finalImage,
                keywords: body.keywords,
                date: body.date,
                urlSlug: body.date + "/" + body.urlSlug,
                mediaType: body.mediaType,
                articleType: body.articleType,
                topics: body.topics,
                subtopics: body.subtopics,
                subjects: body.subjects,
                contributors: body.contributors,
                trivia: body.trivia,
                section: body.section,
                dictionary: body.dictionary,
            }
        );

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
