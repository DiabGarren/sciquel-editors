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

export async function createTopic(name: string, color: string) {
    try {
        await connectDb();

        const topic = await Topics.create({
            name: name,
            color: color,
            checked: false,
        });

        return {
            topic,
        };
    } catch (err) {
        return { err };
    }
}

export async function getTopic(id: string) {
    try {
        await connectDb();
        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Topic not found" };
        }

        const topic = await Topics.findById(parsedId).lean().exec();
        if (topic) {
            return { topic };
        } else {
            return { error: "Topic not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function updateTopic(
    id: string,
    { name, color }: { name: string; color: string }
) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Topic not found" };
        }

        const topic = await Topics.findByIdAndUpdate(
            parsedId,
            { name, color, checked: false },
            { new: true }
        )
            .lean()
            .exec();
        if (topic) {
            return { topic };
        } else {
            return { error: "Topic not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function deleteTopic(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Topic not found" };
        }

        const topic = await Topics.findByIdAndDelete(parsedId).exec();

        if (topic) {
            return {};
        } else {
            return { error: "Topic not found" };
        }
    } catch (err) {
        return { err };
    }
}
