import { Subtopics } from "@/models/subtopics";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface SubtopicsFilter {
    page?: number;
    limit?: number;
}

export async function getSubtopics(filter: SubtopicsFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
        const skip = (page - 1) * limit;

        const subtopics = await Subtopics.find()
            .skip(skip)
            .limit(limit)
            .lean()
            .exec();

        const results = subtopics.length;

        return {
            subtopics: subtopics,
            page,
            limit,
            results,
        };
    } catch (err) {
        return { err };
    }
}

// export async function createTopic(topic: string) {
//     try {

//     }
// }