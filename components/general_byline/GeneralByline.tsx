import Image from "next/image";

/* eslint-disable react/jsx-key */
export default function GeneralByline(props: any) {
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
