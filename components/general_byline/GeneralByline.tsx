/* eslint-disable react/jsx-key */
export default function GeneralByline(props: any) {
    const displayTags = (tagArray: any[]) => {
        let tags = tagArray.map((tag: any) => {
            if (tag.checked) {
                return (
                    <p
                        className="tag"
                        style={{ backgroundColor: tag.color }}
                    >
                        {tag.name}
                    </p>
                );
            }
        });
        return tags;
    };

    return (
        <div className="my-[50px]">
            <div>Topics:{displayTags(props.topSection.topics)}</div>
            <div>Subtopics:{displayTags(props.topSection.subtopics)}</div>
            <div>Subjects:{displayTags(props.topSection.subjects)}</div>
        </div>
    );
}
