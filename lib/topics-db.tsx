import { Topics } from "@/models/topics";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface TopicsFilter {
    page?: number;
    limit?: number;
}

export async function getTopics(filter: TopicsFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
        const skip = (page - 1) * limit;

        const topics = await Topics.find()
            .skip(skip)
            .limit(limit)
            .lean()
            .exec();

        const results = topics.length;

        return {
            topics: topics,
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