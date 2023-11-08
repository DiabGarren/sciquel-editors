/* eslint-disable react/jsx-key */
import Image from "next/image";
import parse from "html-react-parser";

export default async function Home() {
    // const allArticles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`).then((response) =>
    //     response.json()
    // );

    // const articleTags = (array: []) => {
    //     return array.map((item: any) => {
    //         if (item.checked) {
    //             return (
    //                 <div
    //                     className="w-fit px-[5px] text-[12px] text-white rounded-md"
    //                     style={{ backgroundColor: item.color }}>
    //                     {item.name}
    //                 </div>
    //             );
    //         } else return <></>;
    //     });
    // };

    return (
        <main className="m-[50px]">
            <a
                className="button"
                href="/new-article">
                New Article
            </a>
            <div className="flex flex-wrap gap-[10px]">
                {/* {allArticles.data.map((data: any) => {
                    return (
                        <div className="border-2 border-teal w-[300px] rounded-md my-[10px] pb-[5px]">
                            <div
                                className="w-[100%] h-[150px] bg-cover bg-center rounded-[8px_8px_0_0]"
                                style={{
                                    backgroundImage: `url(${
                                        data.finalImage || "/images/bobtail.png"
                                    })`,
                                }}></div>

                            <div className="mx-[5px]">
                                <div className="text-[18px]">
                                    {data.heading === "" || data.heading === "<p><br></p>" ? (
                                        <p>Heading</p>
                                    ) : (
                                        parse(data.heading)
                                    )}
                                </div>
                                <div className="text-[16px]">
                                    {data.subheading === "" || data.subheading === "<p><br></p>" ? (
                                        <p>Subheading</p>
                                    ) : (
                                        parse(data.subheading)
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-x-[5px] gap-y-[2px] text-[13px] mx-[5px]">
                                <p>
                                    {data.mediaType} |{" "}
                                    {data.mediaType === "Article" ? data.articleType + " | " : ""}
                                </p>
                                {articleTags(data.topics)}
                                {articleTags(data.subtopics)}
                                {articleTags(data.subjects)}
                            </div>
                        </div>
                    );
                })} */}
            </div>
        </main>
    );
}
