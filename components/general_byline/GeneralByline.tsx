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

    return (
        <div className="my-[50px]">
            <div>Media Type: {props.topSection.mediaType}</div>
            {articleType()}
            <div>Topics:{displayTags(props.topSection.topics)}</div>
            <div>Subtopics:{displayTags(props.topSection.subtopics)}</div>
            <div>Subjects:{displayTags(props.topSection.subjects)}</div>
        </div>
    );
}
