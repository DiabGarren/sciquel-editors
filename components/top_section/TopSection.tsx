/* eslint-disable react/jsx-key */
export default function TopSection(props: any) {
    const handleDrp = (dropdown: string) => {
        let drp = document.querySelector(dropdown);
        document.querySelectorAll(".drp").forEach((el) => {
            if (el == drp) {
                el?.classList.toggle("hidden");
                el?.classList.toggle("flex");
            } else {
                el?.classList.add("hidden");
                el?.classList.remove("flex");
            }
        });
    };

    const displayTypes = (typeArray: any[], setType: any, typeDrp: string) => {
        let types = typeArray.map((type: string) => {
            return (
                <button
                    className="text-left hover:bg-blue-light px-[5px] py-[2px]"
                    onClick={() => {
                        setType(type);
                        handleDrp(typeDrp);
                    }}
                >
                    {type}
                </button>
            );
        });
        return types;
    };

    const displayTagDrp = (tagArray: any[], setTag: any, tagDrp: string) => {
        let tags = tagArray.map((tag: any, index: number) => {
            return (
                <div
                    className="tagDrp flex cursor-pointer hover:bg-blue-light"
                    onClick={() => {
                        setTag(
                            tagArray.map((t: any, i: number) => {
                                if (i === index) {
                                    if (t.checked) {
                                        t.checked = false;
                                    } else {
                                        t.checked = true;
                                    }
                                    return t;
                                } else {
                                    return t;
                                }
                            })
                        );
                    }}
                >
                    <input
                        type="checkbox"
                        checked={tag.checked}
                    />
                    <p
                        style={{
                            display: "inline-block",
                            textAlign: "left",
                        }}
                    >
                        {tag.name}
                    </p>
                </div>
            );
        });
        return tags;
    };

    const displayTags = (tagArray: any[], setTag: any) => {
        let tags = tagArray.map((tag: any, index: number) => {
            if (tag.checked) {
                return (
                    <div className="tag" style={{ backgroundColor: tag.color }}>
                        <p className="inline-block text-white mr-[5px]">
                            {tag.name}
                        </p>
                        <button
                            className="text-black hover:text-white"
                            onClick={() => {
                                setTag(
                                    tagArray.map((t: any, i: number) => {
                                        if (i === index) {
                                            t.checked = false;
                                            return t;
                                        } else {
                                            return t;
                                        }
                                    })
                                );
                            }}
                        >
                            x
                        </button>
                    </div>
                );
            }
        });
        return tags;
    };

    const articleType = () => {
        if (props.mediaType === "Article") {
            return (
                <div className="relative">
                    Article Type
                    <div>
                        <input
                            className="ArticleType inline w-[250px] rounded border-[1px] cursor-pointer px-[5px]"
                            value={props.articleType}
                            onClick={() => handleDrp(".ArticleType-drp")}
                            readOnly
                        />
                    </div>
                    <div className="drp ArticleType-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                        {displayTypes(
                            props.articleTypes,
                            props.setArticleType,
                            ".ArticleType-drp"
                        )}
                    </div>
                </div>
            );
        } else {
            return <></>;
        }
    };

    return (
        <div className="my-[50px]">
            <div className="relative">
                Media Type
                <div>
                    <input
                        className="MediaType inline w-[250px] rounded border-[1px] cursor-pointer px-[5px]"
                        value={props.mediaType}
                        onClick={() => handleDrp(".MediaType-drp")}
                        readOnly
                    />
                </div>
                <div className="drp MediaType-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                    {displayTypes(
                        props.mediaTypes,
                        props.setMediaType,
                        ".MediaType-drp"
                    )}
                </div>
            </div>
            {articleType()}
            <div className="relative">
                <div>
                    <h3 className="inline-block">Topics</h3>
                    <button
                        className="plus-icon inline-block"
                        onClick={() => handleDrp(".Topics-drp")}
                    >
                        +
                    </button>
                </div>
                <div className="drp Topics-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                    {displayTagDrp(
                        props.topics,
                        props.setTopics,
                        ".Topics-drp"
                    )}
                </div>
                <div>{displayTags(props.topics, props.setTopics)}</div>
            </div>
            <div className="relative">
                <div>
                    <h3 className="inline-block">Subtopics</h3>
                    <button
                        className="plus-icon inline-block"
                        onClick={() => handleDrp(".Subtopics-drp")}
                    >
                        +
                    </button>
                </div>
                <div className="drp Subtopics-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                    {displayTagDrp(
                        props.subtopics,
                        props.setSubtopics,
                        ".Subtopics-drp"
                    )}
                </div>
                <div>{displayTags(props.subtopics, props.setSubtopics)}</div>
            </div>
            <div className="relative">
                <div>
                    <h3 className="inline-block">Subjects</h3>
                    <button
                        className="plus-icon inline-block"
                        onClick={() => handleDrp(".Subjects-drp")}
                    >
                        +
                    </button>
                </div>
                <div className="drp Subjects-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden">
                    {displayTagDrp(
                        props.subjects,
                        props.setSubjects,
                        ".Subjects-drp"
                    )}
                </div>
                <div>{displayTags(props.subjects, props.setSubjects)}</div>
            </div>
        </div>
    );
}
