/* eslint-disable react/jsx-key */
import Image from "next/image";
import parse from "html-react-parser";
import { alegreya_sans_sc } from "@/utils/fonts";

export default async function Home() {
    const allArticles = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/article`).then((response) =>
        response.json()
    );

    const articleTags = (array: []) => {
        return (
            <div className="flex">
                {array.map((item: any) => {
                    if (item.checked) {
                        return (
                            <div
                                className="w-fit h-fit px-[10px] py-[1px] text-white rounded-lr mx-[2px]"
                                style={{ backgroundColor: item.color }}>
                                {item.name}
                            </div>
                        );
                    } else return <></>;
                })}
            </div>
        );
    };

    const displayArticles = () => {
        return allArticles.data.map((data: any) => {
            return (
                <div className="dashboard mx-auto grid grid-cols-[1fr_15px] my-[15px]">
                    <a
                        className="border-4 border-teal rounded-lr p-[10px] grid grid-cols-[150px_1fr_150px]"
                        href={`stories/${data.urlSlug}`}>
                        {/* <div
                        className="w-[150px] h-[150px] bg-cover bg-center rounded"
                        style={{
                            backgroundImage: `url(${data.finalImage || "/images/bobtail.png"})`,
                        }}></div> */}
                        <Image
                            className="object-cover aspect-[1/1] rounded"
                            src={data.finalImage || "/images/bobtail.png"}
                            alt="Cover image"
                            width={150}
                            height={150}
                        />

                        <div className="mx-[15px]">
                            <div
                                style={{
                                    fontFamily: alegreya_sans_sc.style.fontFamily,
                                    fontWeight: "500",
                                }}>
                                <div className="text-[22px]">
                                    {data.heading === "" || data.heading === "<p><br></p>" ? (
                                        <p>Heading</p>
                                    ) : (
                                        parse(data.heading)
                                    )}
                                </div>
                                <div className="text-[18px]">
                                    {data.subheading === "" || data.subheading === "<p><br></p>" ? (
                                        <p>Subheading</p>
                                    ) : (
                                        parse(data.subheading)
                                    )}
                                </div>
                            </div>
                            <div className="text-[15px] indent-[-10px] pl-[10px] mt-[5px]">
                                {data.contributors.map((type: any) => {
                                    if (type.checked) {
                                        let cons: string[] = [];
                                        type.contributors.map((con: any) => {
                                            cons.push(con.name);
                                        });

                                        return (
                                            <p>
                                                {type.verb} by: {cons[0]}
                                                {cons.length === 2
                                                    ? ` and ${cons[1]}`
                                                    : cons.length > 2
                                                    ? cons.map((con: any, index: number) => {
                                                          if (
                                                              index != 0 &&
                                                              index != cons.length - 1
                                                          ) {
                                                              return `, ${con}`;
                                                          } else if (index == cons.length - 1) {
                                                              return ` and ${con}`;
                                                          } else return "";
                                                      })
                                                    : ""}
                                            </p>
                                        );
                                    } else return <></>;
                                })}
                            </div>
                        </div>

                        <div className="text-[15px] text-right">
                            <p>
                                {data.mediaType}
                                {data.mediaType === "Article" ? ` | ${data.articleType}` : ""}
                            </p>
                        </div>
                        <div className="col-[1/4] flex flex-wrap text-[14px] mt-[10px]">
                            {articleTags(data.topics)}
                            {articleTags(data.subtopics)}
                            {articleTags(data.subjects)}
                        </div>
                    </a>
                    <a
                        href={`edit/${data.urlSlug}`}
                        className="self-end p-[5px] w-[35px] h-[35px] ml-[-45px] mb-[10px] rounded hover:bg-teal [&_*]:hover:stroke-white [&_*]:stroke-transparent">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 66 66"
                            fill="none">
                            <path
                                d="M21 56L3.5 62.5L10 45M21 56L10 45M21 56L51.5 25.5M10 45L40.5 14.5M46 9.00005L51 4.00005C52 3 57.4348 -0.999806 62 4.00007C66.5652 8.99994 63 14 62 15.0001L57 20M46 9.00005L57 20M46 9.00005L40.5 14.5M57 20L51.5 25.5M40.5 14.5L51.5 25.5"
                                stroke="black"
                                strokeWidth="5"
                            />
                        </svg>
                    </a>
                </div>
            );
        });
    };

    return (
        <main className="m-[50px]">
            <a
                className="button"
                href="/new-article">
                New Article
            </a>
            <div className="flex flex-col">{displayArticles()}</div>
        </main>
    );
}
