/* eslint-disable react/jsx-key */
import Image from "next/image";
import parse from "html-react-parser";

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
                <div className="dashboard border-4 border-teal rounded-lr p-[10px] my-[15px] mx-auto grid grid-cols-[150px_1fr_150px]">
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
                                            {cons.length == 2
                                                ? ` and ${cons[1]}`
                                                : cons.map((con: any, index: number) => {
                                                      if (index != 0 && index != cons.length - 1) {
                                                          return `, ${con}`;
                                                      } else if (index == cons.length - 1) {
                                                          return ` and ${con}`;
                                                      } else return "";
                                                  })}
                                        </p>
                                    );
                                } else return <></>;
                            })}
                        </div>
                    </div>

                    <div className="text-[15px] text-right">
                        <p>
                            {data.mediaType} |{" "}
                            {data.mediaType === "Article" ? data.articleType : ""}
                        </p>
                    </div>
                    <div className="col-[1/4] flex flex-wrap text-[14px] mt-[5px]">
                        {articleTags(data.topics)}
                        {articleTags(data.subtopics)}
                        {articleTags(data.subjects)}
                    </div>
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
