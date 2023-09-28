"use server";

import { createTopic, deleteTopic, updateTopic } from "@/lib/topics-db";
import { revalidatePath } from "next/cache";

/**
 * Server Action: Create Topic
 */
export async function createTopicAction({
    name,
    color,
    path,
}: {
    name: string;
    color: string;
    path: string;
}) {
    await createTopic(name, color);
    revalidatePath(path);
}

/**
 * Server Action: Update existing Topic
 */
export async function updateTopicAction(
    id: string,
    update: { name: string; color: string },
    path: string
) {
    await updateTopic(id, update);
    revalidatePath(path);
}

/**
 * Server Action: Delete Topic
 */
export async function deleteTopicAction({
    id,
    path,
}: {
    id: string;
    path: string;
}) {
    await deleteTopic(id);
    revalidatePath(path);
}
