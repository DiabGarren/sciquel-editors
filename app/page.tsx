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

    return (
        <main className="p-[10px] pt-[20px]">
            <div className="w-[100%] md:w-[80%] lr:w-[650px]  mx-auto">
                <a
                    className="button block text-center w-[100%] md:w-fit"
                    href="/new-article">
                    New Article
                </a>
            </div>

            <div className="flex flex-col">
                {allArticles.data.map((data: any) => {
                    return (
                        <div className="grid md:grid-cols-[1fr_0] w-[100%] md:w-[80%] lr:w-[650px] mx-auto my-[15px]">
                            <a
                                className="border-2 border-teal rounded-[10px_10px_0_0] md:rounded-box p-[7px] grid md:grid-cols-[150px_1fr]"
                                href={`stories/${data.urlSlug}`}>
                                <Image
                                    className="object-cover w-[100%] md:w-[150px] h-[100px] md:h-[150px] rounded "
                                    src={data.finalImage || "/images/bobtail.png"}
                                    alt="Cover image"
                                    width={150}
                                    height={150}
                                />

                                <div className="grid grid-cols-[1fr_110px] mt-[7px] md:mx-[15px]">
                                    <div
                                        style={{
                                            fontFamily: alegreya_sans_sc.style.fontFamily,
                                            fontWeight: "500",
                                        }}>
                                        <div className="text-[22px]">
                                            {data.heading === "" ||
                                            data.heading === "<p><br></p>" ? (
                                                <p>Heading</p>
                                            ) : (
                                                parse(data.heading)
                                            )}
                                        </div>
                                        <div className="text-[18px]">
                                            {data.subheading === "" ||
                                            data.subheading === "<p><br></p>" ? (
                                                <p>Subheading</p>
                                            ) : (
                                                parse(data.subheading)
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-[15px] text-right pt-[7px]">
                                        {data.mediaType}
                                        {data.mediaType === "Article"
                                            ? ` | ${data.articleType}`
                                            : ""}
                                    </p>
                                    <div className="col-[1/3] text-[16px] md:indent-[-10px] md:pl-[10px] md:mt-[5px]">
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
                                                            ? cons.map(
                                                                  (con: any, index: number) => {
                                                                      if (
                                                                          index != 0 &&
                                                                          index != cons.length - 1
                                                                      ) {
                                                                          return `, ${con}`;
                                                                      } else if (
                                                                          index ==
                                                                          cons.length - 1
                                                                      ) {
                                                                          return ` and ${con}`;
                                                                      } else return "";
                                                                  }
                                                              )
                                                            : ""}
                                                    </p>
                                                );
                                            } else return <></>;
                                        })}
                                    </div>
                                </div>
                                <div className="md:col-[1/4] flex flex-wrap text-[14px] mt-[10px]">
                                    {articleTags(data.topics)}
                                    {articleTags(data.subtopics)}
                                    {articleTags(data.subjects)}
                                </div>
                            </a>
                            <a
                                href={`edit/${data.urlSlug}`}
                                className="block self-end p-[5px] w-[100%] md:w-[35px] h-[35px] md:ml-[-45px] mb-[10px] rounded-[0_0_10px_10px] md:rounded bg-teal lr:bg-white lr:hover:bg-teal [&_*]:hover:stroke-white">
                                <svg
                                    className="mx-auto"
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
                })}
            </div>
        </main>
    );
}
