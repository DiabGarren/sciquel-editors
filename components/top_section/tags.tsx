/* eslint-disable react/jsx-key */

import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import { ChromePicker } from "react-color";
import Popup from "reactjs-popup";

interface Tag {
    name: string;
    color: string;
    checked: boolean;
}

export default function Tags(props: any) {
    const displayTagHolder = (
        title: string,
        tagArray: never[] | Tag[],
        setTagArray: Dispatch<SetStateAction<never[]>> | any
    ) => {
        return (
            <div className="mb-[15px]">
                <div
                    className="grid w-[150px] items-center"
                    style={{ gridTemplateColumns: "125px 1fr" }}>
                    <h3 className="inline-block">{title}</h3>
                    <Popup
                        trigger={
                            <Button
                                className="w-[80px] md:w-[65px] text-[1.25rem] md:text-[1.1rem]"
                                color="primary">
                                +
                            </Button>
                        }
                        position={"bottom center"}>
                        <div className="popup">
                            {tagArray.map((tag: any, index: number) => {
                                return (
                                    <div
                                        className="popup-item grid grid-cols-[1fr_15px] items-center"
                                        onClick={(event) => {
                                            setTagArray(
                                                tagArray.map((tag: any, tagIndex: number) => {
                                                    if (tagIndex === index) {
                                                        if (tag.checked) {
                                                            tag.checked = false;
                                                        } else tag.checked = true;
                                                    }
                                                    return tag;
                                                })
                                            );
                                        }}>
                                        <input
                                            type="checkbox"
                                            className="switch"
                                            checked={tag.checked}
                                        />
                                        <p className="inline pl-[4px]">{tag.name}</p>
                                        <svg
                                            className="check ml-[8px] justify-self-end"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="12"
                                            height="8"
                                            viewBox="0 0 11 7"
                                            fill="none">
                                            <path
                                                d="M1 3.5L4 6.5L10 0.5"
                                                stroke="#0a5757"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                );
                            })}
                        </div>
                    </Popup>
                </div>
                <div className="tag-container my-[5px]">{displayTags(tagArray, setTagArray)}</div>
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
                style={{ maxHeight: "none" }}>
                <input
                    className="border block w-[100%]"
                    placeholder={title.substring(0, title.length - 1)}
                    value={props.tagName}
                    onChange={(event: any) => props.setTagName(event.target.value)}
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

                            document.querySelectorAll(".color").forEach((el) => {
                                el?.classList.remove("block");
                                el?.classList.add("hidden");
                            });
                        }
                    }}>
                    Add
                </button>
                <button
                    className="button w-[100%]"
                    onClick={() => {
                        document.querySelectorAll(".color").forEach((el) => {
                            el?.classList.remove("block");
                            el?.classList.add("hidden");
                        });
                    }}>
                    Cancel
                </button>
            </div>
        );
    };

    const displayTags = (tagArray: any[], setTagArray: any) => {
        let tags = tagArray.map((tag: any, index: number) => {
            if (tag.checked) {
                return (
                    <div
                        className="tag my-[2px]"
                        style={{ backgroundColor: tag.color }}>
                        <p className="inline-block text-white mr-[5px]">{tag.name}</p>
                        <TrashIcon
                            className="trash-icon inline-block h-[21px]"
                            aria-hidden="true"
                            onClick={() => {
                                setTagArray(
                                    tagArray.map((t: Tag, i: number) => {
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
        return <div className="flex flex-wrap gap-x-[7px]">{tags}</div>;
    };
    return (
        <div className="mb-[30px]">
            {displayTagHolder("Topics", props.topics, props.setTopics)}
            {displayTagHolder("Subtopics", props.subtopics, props.setSubtopics)}
            {displayTagHolder("Subjects", props.subjects, props.setSubjects)}
        </div>
    );
}
