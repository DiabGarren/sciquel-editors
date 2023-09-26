import { Subjects } from "@/models/subjects";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface SubjectsFilter {
    page?: number;
    limit?: number;
}

export async function getSubjects(filter: SubjectsFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
        const skip = (page - 1) * limit;

        const subjects = await Subjects.find()
            .skip(skip)
            .limit(limit)
            .lean()
            .exec();

        const results = subjects.length;

        return {
            subjects: subjects,
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