/* eslint-disable react/jsx-key */
import Image from "next/image";

export default function GeneralByline(props: any) {
    let type = props.topSection.mediaType;
    if (type === "Article") type = props.topSection.articleType;

    const tags = (tagArray: []) => {
        let checked = [];
        tagArray.forEach((tag: any) => {
            if (tag.checked) checked.push(tag);
        });
        if (checked.length > 0) {
            let tags = tagArray.map((tag: any) => {
                if (tag.checked)
                    return (
                        <p
                            className="
                            inline-block 
                            h-[20px] 
                            px-[5px] 
                            py-[2px] 
                            text-white 
                            text-[12px] 
                            rounded-[10px] 
                            mx-[2px]
                            "
                            style={{ backgroundColor: tag.color }}
                        >
                            {tag.name}
                        </p>
                    );
            });
            return <span>| {tags}</span>;
        } else {
            if (tagArray === props.topSection.topics)
                return <span>| No topic</span>;
            else return <></>;
        }
    };

    const contributors = () => {
        return props.topSection.contributors.map((type: any) => {
            if (type.name === "Author") {
                const noAuthors = [];
                type.contributors.forEach((con: any) => {
                    if (con.checked) noAuthors.push(true);
                });

                const authors = type.contributors.map((con: any) => {
                    if (con.checked) {
                        return <p>by {con.name}</p>;
                    } else return <></>;
                });

                if (authors.length === 0 || noAuthors.length === 0)
                    return <p>No Author</p>;
                else return authors;
            } else return <></>;
        });
    };

    return (
        <>
            <p>
                {type} {tags(props.topSection.topics)}{" "}
                {tags(props.topSection.subtopics)}{" "}
                {tags(props.topSection.subjects)}
            </p>
            <div>{contributors()}</div>
        </>
    );
}

export function GeneralBylineBox(props: any) {
    const displayTags = (tagArray: any[]) => {
        let tags = tagArray.map((tag: any) => {
            if (tag.checked) {
                return (
                    <p className="tag" style={{ backgroundColor: tag.color }}>
                        {tag.name}
                    </p>
                );
            }
        });
        return tags;
    };

    const articleType = () => {
        if (props.topSection.mediaType === "Article") {
            return <div>Article Type: {props.topSection.articleType}</div>;
        } else {
            return <></>;
        }
    };

    const displayContributors = () => {
        let contributors = props.topSection.contributors.map((t: any) => {
            console.log();

            let type = t.contributors.map((con: any, index: number) => {
                if (con.checked) {
                    return (
                        <div>
                            <Image
                                className="inline-block"
                                src={"default_profile.svg"}
                                alt={"default_profile"}
                                width={55}
                                height={55}
                            />
                            <p className="inline-block">{con.name}</p>
                        </div>
                    );
                }
            });
            if (t.contributors.length === 0) return <></>;
            else
                return (
                    <div>
                        <p>{t.name}s:</p> {type}
                    </div>
                );
        });
        return <div>{contributors}</div>;
    };

    return (
        <div className="w-[750px] mx-[auto]  my-[50px]">
            <div>Media Type: {props.topSection.mediaType}</div>
            {articleType()}
            <div>Topics:{displayTags(props.topSection.topics)}</div>
            <div>Subtopics:{displayTags(props.topSection.subtopics)}</div>
            <div>Subjects:{displayTags(props.topSection.subjects)}</div>
            {displayContributors()}
        </div>
    );
}
