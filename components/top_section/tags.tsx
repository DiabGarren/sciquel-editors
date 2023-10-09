import { TrashIcon } from "@heroicons/react/20/solid";
import { ChromePicker } from "react-color";

/* eslint-disable react/jsx-key */
export default function Tags(props: any) {
    const displayTagHolder = (
        title: string,
        tagArray: any[],
        setTagArray: any
    ) => {
        return (
            <div className="relative mb-[20px]">
                <div
                    className="grid w-[150px]"
                    style={{ gridTemplateColumns: "1fr 25px" }}
                >
                    <h3 className="inline-block">{title}</h3>
                    <button
                        className="plus-icon inline-block justify-right"
                        onClick={() => props.handleDrp(`.${title}-drp`)}
                    >
                        +
                    </button>
                </div>
                <div
                    className={`drp ${title}-drp flex-col absolute w-[250px] rounded border-[1px] bg-white z-10 hidden`}
                >
                    {displayTagDrp(title, tagArray, setTagArray)}
                </div>
                <div
                    className="my-[5px] w-[450px]"
                    style={{ maxHeight: "65px", overflowY: "auto" }}
                >
                    {displayTags(tagArray, setTagArray)}
                </div>
                {addTag(title, tagArray, setTagArray)}
            </div>
        );
    };

    const addTag = (title: string, tagArray: any[], setTagArray: any) => {
        const pickerStyles = {
            default: {
                picker: { width: "100%" },
            },
        };
        return (
            <div
                className={`color ${title}-color absolute flex-col w-[250px] z-10 hidden`}
                style={{ maxHeight: "none" }}
            >
                <input
                    className="border block w-[100%]"
                    placeholder={title.substring(0, title.length - 1)}
                    value={props.tagName}
                    onChange={(event: any) =>
                        props.setTagName(event.target.value)
                    }
                />
                <ChromePicker
                    color={props.tagColor}
                    disableAlpha={true}
                    styles={pickerStyles}
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
                    className="Drp border w-[100%]"
                    placeholder={`Search ${title}`}
                    onChange={(event: any) => {
                        props.setTagName(event.target.value);
                    }}
                />
                <button
                    className="Drp plus-icon"
                    onClick={() => {
                        props.handleDrp(`.${title}-color`);
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
                            className="Drp flex cursor-pointer hover:bg-blue-light"
                            onClick={() => {
                                setTagArray(
                                    tagArray.map((t: any, i: number) => {
                                        if (i === index) {
                                            if (t.checked) t.checked = false;
                                            else t.checked = true;

                                            return t;
                                        } else return t;
                                    })
                                );
                            }}
                        >
                            <input
                                className="Drp switch"
                                type="checkbox"
                                checked={tag.checked}
                            />
                            <p
                                className="Drp"
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
                        className="Drp flex cursor-pointer hover:bg-blue-light"
                        onClick={() => {
                            setTagArray(
                                tagArray.map((t: any, i: number) => {
                                    if (i === index) {
                                        if (t.checked) t.checked = false;
                                        else t.checked = true;

                                        return t;
                                    } else return t;
                                })
                            );
                        }}
                    >
                        <input
                            className="Drp switch"
                            type="checkbox"
                            checked={tag.checked}
                        />
                        <p
                            className="Drp"
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
                    <div
                        className="tag my-[2px]"
                        style={{ backgroundColor: tag.color }}
                    >
                        <p className="inline-block text-white mr-[5px]">
                            {tag.name}
                        </p>
                        {/* <button
                            className="text-black hover:text-white"
                            onClick={() => {
                                setTagArray(
                                    tagArray.map((t: any, i: number) => {
                                        if (i === index) {
                                            t.checked = false;
                                            return t;
                                        } else return t;
                                    })
                                );
                            }}
                        >
                            x
                        </button> */}
                        <TrashIcon
                            className="trash-icon inline-block h-[21px]"
                            aria-hidden="true"
                            onClick={() => {
                                setTagArray(
                                    tagArray.map((t: any, i: number) => {
                                        if (i === index) {
                                            t.checked = false;
                                            return t;
                                        } else return t;
                                    })
                                );
                            }}
                        />
                    </div>
                );
            }
        });
        return tags;
    };
    return (
        <div className="mb-[30px]">
            {displayTagHolder("Topics", props.topics, props.setTopics)}
            {displayTagHolder("Subtopics", props.subtopics, props.setSubtopics)}
            {displayTagHolder("Subjects", props.subjects, props.setSubjects)}
        </div>
    );
}
