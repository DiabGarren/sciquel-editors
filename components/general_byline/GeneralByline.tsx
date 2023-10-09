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
