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
                            style={{ backgroundColor: tag.color }}>
                            {tag.name}
                        </p>
                    );
            });
            return <span>| {tags}</span>;
        } else {
            return tagArray === props.topSection.topics ? <span>| No topic</span> : <></>;
        }
    };

    const contributors = () => {
        return props.topSection.contributors.map((type: any) => {
            if (type.contributors.length > 0) {
                if (type.contributors.length === 1) {
                    return (
                        <p>
                            {type.verb} by {type.contributors[0].name}
                        </p>
                    );
                } else {
                    let contributors: string = "";
                    for (let i = 1; i < type.contributors.length - 1; i++) {
                        contributors += `, ${type.contributors[i].name}`;
                    }
                    contributors = `${type.contributors[0].name}${contributors} and ${
                        type.contributors[type.contributors.length - 1].name
                    }`;

                    return (
                        <p>
                            {type.verb} by {contributors}
                        </p>
                    );
                }
            } else return <></>;
        });
    };

    return (
        <>
            <p>
                {type} {tags(props.topSection.topics)} {tags(props.topSection.subtopics)}{" "}
                {tags(props.topSection.subjects)}
            </p>
            <div>{contributors()}</div>
        </>
    );
}
