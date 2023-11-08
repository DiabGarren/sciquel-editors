"use server";
import { createArticleAction } from "@/app/_actions";
import { Button } from "@nextui-org/react";

// export default async function CreateArticle() {
//     async function action() {
//         "use server";
//         const title = "";

//         await createArticleAction({ title, path: "/" });
//     }

//     return <Button onClick={action}>Create Article</Button>;
// }

export default async function CreateArticleAction() {
    // const title = "";
    // await createArticleAction({ title, path: "/" });

    const create = fetch(process.env.)
    // return { complete: true };
}
