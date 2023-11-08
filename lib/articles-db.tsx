import { Article } from "@/models/article";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface ArticlesFilter {
    page?: number;
    limit?: number;
}

export async function getArticles(filter: ArticlesFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
        const skip = (page - 1) * limit;

        const articles = await Article.find().skip(skip).limit(limit).lean().exec();

        const results = articles.length;

        return {
            articles: articles,
            page,
            limit,
            results,
        };
    } catch (error) {
        return { error };
    }
}

export async function getArticle(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Article not found" };
        }

        const article = await Article.findById(parsedId).lean().exec();
        if (article) {
            return { article };
        } else {
            return { error: "Article not found" };
        }
    } catch (error) {
        return { error };
    }
}

export async function createArticle(urlSlug: string) {
    try {
        await connectDb();

        const article = await Article.create({ urlSlug: urlSlug });

        return { article };
    } catch (error) {
        return { error };
    }
}
// export async function createArticle({
//     heading,
//     subheading,
//     finalImage,
//     urlSlug,
//     mediaType,
//     articleType,
//     topics,
//     subtopics,
//     subjects,
//     contributors,
//     trivia,
// }: {
//     heading: string;
//     subheading: string;
//     finalImage: string;
//     urlSlug: string;
//     mediaType: string;
//     articleType: string;
//     topics: [];
//     subtopics: [];
//     subjects: [];
//     contributors: [];
//     trivia: [];
// }) {
//     try {
//         await connectDb();

//         const article = await Articles.create({
//             heading: heading,
//             subheading: subheading,
//             finalImage: finalImage,
//             urlSlug: urlSlug,
//             mediaType: mediaType,
//             articleType: articleType,
//             topics: topics,
//             subtopics: subtopics,
//             subjects: subjects,
//             contributors: contributors,
//             trivia: trivia,
//         });

//         return { article };
//     } catch (error) {
//         return { error };
//     }
// }

export async function updateArticle(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Article not found" };
        }

        const article = await Article.findByIdAndUpdate(parsedId, {}, { new: true }).lean().exec();

        if (article) {
            return { erorr: "Article not found" };
        }
    } catch (error) {
        return { error };
    }
}

export async function deleteArticle(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Article not found" };
        }

        const article = await Article.findByIdAndDelete(parsedId).exec();

        if (article) {
            return {};
        } else {
            return { error: "Article no found" };
        }
    } catch (error) {
        return { error };
    }
}
