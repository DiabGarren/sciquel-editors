/* eslint-disable react/jsx-key */
import { ChromePicker } from "react-color";
export default function TopSection(props: any) {
    if (props.topics.length === 0 || !props.topics) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:3000/api/topics");
        xhr.onload = () => {
            if (xhr.status === 200) {
                props.setTopics(JSON.parse(xhr.responseText).topics);
            }
        };
        xhr.send();
    }

    if (props.subtopics) {
        if (props.subtopics.length === 0) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:3000/api/subtopics");
            xhr.onload = () => {
                if (xhr.status === 200) {
                    props.setSubtopics(JSON.parse(xhr.responseText).subtopics);
                }
            };
            xhr.send();
        }
    }

    if (props.subjects) {
        if (props.subjects.length === 0) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:3000/api/subjects");
            xhr.onload = () => {
                if (xhr.status === 200) {
                    props.setSubjects(JSON.parse(xhr.responseText).subjects);
                }
            };
            xhr.send();
        }
    }

    const handleDrp = (dropdown: string) => {
        let drp = document.querySelector(dropdown);

        if (dropdown.includes("drp")) {
            document.querySelectorAll(".drp").forEach((el) => {
                if (el == drp) {
                    el?.classList.toggle("hidden");
                    el?.classList.toggle("flex");
                } else {
                    el?.classList.add("hidden");
                    el?.classList.remove("flex");
                }
            });
        } else if (dropdown.includes("color")) {
            document.querySelectorAll(".color").forEach((el) => {
                if (el == drp) {
                    el?.classList.toggle("hidden");
                    el?.classList.toggle("block");
                } else {
                    el?.classList.add("hidden");
                    el?.classList.remove("block");
                }
            });
        }
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

    const displayTagHolder = (
        title: string,
        tagArray: any[],
        setTagArray: any
    ) => {
        return (
            <div className="relative my-[10px]">
                <div
                    className="grid w-[130px]"
                    style={{ gridTemplateColumns: "1fr 25px" }}
                >
                    <h3 className="inline-block">{title}</h3>
                    <button
                        className="plus-icon inline-block justify-right"
                        onClick={() => handleDrp(`.${title}-drp`)}
                    >
                        +
                    </button>
                </div>
                <div
                    className={`drp ${title}-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden`}
                >
                    {displayTagDrp(title, tagArray, setTagArray)}
                </div>
                <div>{displayTags(tagArray, setTagArray)}</div>
                {addTag(title, tagArray, setTagArray)}
            </div>
        );
    };

    const addTag = (title: string, tagArray: any[], setTagArray: any) => {
        return (
            <div
                className={`color ${title}-color absolute flex-col z-10 hidden`}
                style={{ maxHeight: "none" }}
            >
                <input
                    className="border block"
                    placeholder={title.substring(0, title.length - 1)}
                    value={props.tagName}
                    onChange={(event: any) =>
                        props.setTagName(event.target.value)
                    }
                />
                <ChromePicker
                    color={props.tagColor}
                    onChange={(color) => props.setTagColor(color.hex)}
                />
                <button
                    className="button w-[100%]"
                    style={{ background: props.tagColor }}
                    onClick={() => {
                        if (props.tagName === "") {
                        } else {
                            setTagArray([
                                ...tagArray,
                                {
                                    name: props.tagName,
                                    color: props.tagColor,
                                    checked: false,
                                },
                            ]);

                            props.setTagName("");

                            document
                                .querySelectorAll(".color")
                                .forEach((el) => {
                                    el?.classList.remove("block");
                                    el?.classList.add("hidden");
                                });
                        }
                    }}
                >
                    Add
                </button>
                <button
                    className="button w-[100%]"
                    onClick={() => {
                        document.querySelectorAll(".color").forEach((el) => {
                            el?.classList.remove("block");
                            el?.classList.add("hidden");
                        });
                    }}
                >
                    Cancel
                </button>
            </div>
        );
    };

    const displayTagDrp = (
        title: string,
        tagArray: any[],
        setTagArray: any
    ) => {
        let tags;
        let input = (
            <div
                className="realative grid"
                style={{ gridTemplateColumns: "1fr 30px" }}
            >
                <input
                    className="tagDrp border w-[100%]"
                    placeholder={`Search ${title}`}
                    onChange={(event: any) => {
                        props.setTagName(event.target.value);
                    }}
                />
                <button
                    className="tagDrp plus-icon"
                    onClick={() => {
                        handleDrp(`.${title}-color`);
                    }}
                >
                    +
                </button>
            </div>
        );
        if (props.tagName) {
            tags = tagArray.map((tag: any, index: number) => {
                if (
                    tag.name.toLowerCase().includes(props.tagName.toLowerCase())
                ) {
                    return (
                        <div
                            className="tagDrp flex cursor-pointer hover:bg-blue-light"
                            onClick={() => {
                                setTagArray(
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
                                className="tagDrp"
                                type="checkbox"
                                checked={tag.checked}
                            />
                            <p
                                className="tagDrp"
                                style={{
                                    display: "inline-block",
                                    textAlign: "left",
                                }}
                            >
                                {tag.name}
                            </p>
                        </div>
                    );
                } else {
                    return <></>;
                }
            });
        } else {
            tags = tagArray.map((tag: any, index: number) => {
                return (
                    <div
                        className="tagDrp flex cursor-pointer hover:bg-blue-light"
                        onClick={() => {
                            setTagArray(
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
                            className="tagDrp"
                            type="checkbox"
                            checked={tag.checked}
                        />
                        <p
                            className="tagDrp"
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
        }
        return (
            <div>
                {input}
                {tags}
            </div>
        );
    };

    const displayTags = (tagArray: any[], setTagArray: any) => {
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
                                setTagArray(
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
            <div
                className="grid mb-[30px]"
                style={{ gridTemplateColumns: "450px 1fr" }}
            >
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
            </div>
            <div
                className="grid mb-[25px]"
                style={{ gridTemplateColumns: "450px 1fr" }}
            >
                {displayTagHolder("Topics", props.topics, props.setTopics)}
                {displayTagHolder(
                    "Subtopics",
                    props.subtopics,
                    props.setSubtopics
                )}
                {displayTagHolder(
                    "Subjects",
                    props.subjects,
                    props.setSubjects
                )}
            </div>
        </div>
    );
}
