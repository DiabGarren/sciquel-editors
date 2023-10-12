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
            return tagArray === props.topSection.topics ? (
                <span>| No topic</span>
            ) : (
                <></>
            );
        }
    };

    const contributors = () => {
        return props.topSection.contributors.map((type: any) => {
            const cons: any[] = [];
            type.contributors.forEach((con: any) => {
                if (con.checked) {
                    cons.push(con.name);
                }
            });

            if (cons.length > 0) {
                if (cons.length === 1) {
                    return (
                        <p>
                            {type.verb} by: {cons[0]}
                        </p>
                    );
                } else {
                    let contributors: string = "";
                    for (let i = 1; i < cons.length - 1; i++) {
                        contributors += `, ${cons[i]}`;
                    }
                    contributors = `${cons[0]}${contributors} and ${
                        cons[cons.length - 1]
                    }`;

                    return (
                        <p>
                            {type.verb} by: {contributors}
                        </p>
                    );
                }
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
