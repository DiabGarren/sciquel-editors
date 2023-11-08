/* eslint-disable react/jsx-key */
"use client";

import { TrashIcon } from "@heroicons/react/20/solid";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ChromePicker } from "react-color";

interface Tag {
    name: string;
    color: string;
    checked: boolean;
}

export default function Tags(props: any) {
    const [selectedTopics, setSelectedTopics] = useState(new Set<string>());

    const [selectedSubtopics, setSelectedSubtopics] = useState(new Set<string>());
    const [selectedSubjects, setSelectedSubjects] = useState(new Set<string>());

    const displayTagHolder = (
        title: string,
        tagArray: never[] | Tag[],
        setTagArray: Dispatch<SetStateAction<never[]>> | any,
        selectedArray: Set<string>,
        setSelectedArray: Dispatch<SetStateAction<Set<string>>> | any
    ) => {
        return (
            <div className="mb-[15px]">
                <div
                    className="grid w-[150px] items-center"
                    style={{ gridTemplateColumns: "125px 1fr" }}>
                    <h3 className="inline-block">{title}</h3>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="solid"
                                color="primary">
                                +
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dymanic Actions"
                            variant="solid"
                            color="primary"
                            closeOnSelect={false}
                            selectionMode="multiple"
                            selectedKeys={selectedArray}
                            onSelectionChange={setSelectedArray}
                            items={tagArray}>
                            {(item: Tag | any) => (
                                <DropdownItem
                                    key={item.name}
                                    onClick={() => {
                                        setTagArray(
                                            tagArray.map((tag: any) => {
                                                if (tag.name === item.name) {
                                                    if (tag.checked) tag.checked = false;
                                                    else tag.checked = true;
                                                }
                                                return tag;
                                            })
                                        );
                                    }}>
                                    {item.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="tag-container my-[5px]">
                    {displayTags(tagArray, setTagArray, selectedArray)}
                </div>
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

    const displayTags = (tagArray: any[], setTagArray: any, selectedArray: Set<string>) => {
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
                                            selectedArray.delete(t.name);
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
            {displayTagHolder(
                "Topics",
                props.topics,
                props.setTopics,
                selectedTopics,
                setSelectedTopics
            )}
            {displayTagHolder(
                "Subtopics",
                props.subtopics,
                props.setSubtopics,
                selectedSubtopics,
                setSelectedSubtopics
            )}
            {displayTagHolder(
                "Subjects",
                props.subjects,
                props.setSubjects,
                selectedSubjects,
                setSelectedSubjects
            )}
        </div>
    );
}
