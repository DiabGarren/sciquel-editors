import { Users } from "@/models/users";
import connectDb from "./connectDb";
import { stringToObjectId } from "./utils";

interface UsersFilter {
    page?: number;
    limit?: number;
}

export async function getUsers(filter: UsersFilter = {}) {
    try {
        await connectDb();

        const page = filter.page ?? 1;
        const limit = filter.limit ?? 10;
        const skip = (page - 1) * limit;

        const users = await Users.find()
            .skip(skip)
            .limit(limit)
            .lean()
            .exec();

        const results = users.length;

        return {
            users: users,
            page,
            limit,
            results,
        };
    } catch (err) {
        return { err };
    }
}

export async function createContributor(name: string, color: string) {
    try {
        await connectDb();

        const users = await Users.create({
            name: name,
            color: color,
            checked: false,
        });

        return {
            users,
        };
    } catch (err) {
        return { err };
    }
}

export async function getContributor(id: string) {
    try {
        await connectDb();
        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Contributor not found" };
        }

        const users = await Users.findById(parsedId).lean().exec();
        if (users) {
            return { users };
        } else {
            return { error: "Contributor not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function updateContributor(
    id: string,
    { name, color }: { name: string; color: string }
) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Contributor not found" };
        }

        const users = await Users.findByIdAndUpdate(
            parsedId,
            { name, color, checked: false },
            { new: true }
        )
            .lean()
            .exec();
        if (users) {
            return { users };
        } else {
            return { error: "Contributor not found" };
        }
    } catch (err) {
        return { err };
    }
}

export async function deleteContributor(id: string) {
    try {
        await connectDb();

        const parsedId = stringToObjectId(id);

        if (!parsedId) {
            return { error: "Contributor not found" };
        }

        const users = await Users.findByIdAndDelete(parsedId).exec();

        if (users) {
            return {};
        } else {
            return { error: "Contributor not found" };
        }
    } catch (err) {
        return { err };
    }
}
