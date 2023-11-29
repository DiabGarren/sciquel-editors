/* eslint-disable react/jsx-key */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Contributors from "./contributors";
import Tags from "./tags";
import { Dispatch, SetStateAction } from "react";
import Popup from "reactjs-popup";

export default function TopSection(props: any) {
    const tagsProps = {
        topics: props.topics,
        setTopics: props.setTopics,
        subtopics: props.subtopics,
        setSubtopics: props.setSubtopics,
        subjects: props.subjects,
        setSubjects: props.setSubjects,
        tagName: props.tagName,
        setTagName: props.setTagName,
        tagColor: props.tagColor,
        setTagColor: props.setTagColor,
    };

    const contributorsProps = {
        allContributors: props.allContributors,
        setAllContributors: props.setAllContributors,
        contributors: props.contributors,
        setContributors: props.setContributors,
    };

    const displayTypes = (
        title: string,
        allTypesArray: any[],
        typeProp: string,
        setTypeProp: Dispatch<SetStateAction<string>>
    ) => {
        if (title === "Article Type" && props.mediaType !== "Article") {
            return <></>;
        }
        return (
            <div
                className="grid w-[250px] mr-[20px] mb-[10px]"
                style={{ gridTemplateColumns: "125px 125px" }}>
                <h3 className="inline">{title}</h3>
                <Popup
                    trigger={<Button color="primary">{typeProp}</Button>}
                    position={"bottom center"}>
                    <div className="popup">
                        {allTypesArray.map((type: any, index: number) => {
                            return (
                                <div
                                    className="grid grid-cols-[1fr_15px] p-[4px] cursor-pointer rounded items-center hover:bg-grey-light-1"
                                    onClick={(event) => {
                                        setTypeProp(type.name);
                                    }}>
                                    <input
                                        type="checkbox"
                                        className="switch"
                                        checked={type.name === typeProp}
                                    />
                                    <p className="inline pl-[4px]">{type.name}</p>
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
        );
    };

    return (
        <>
            <div className="mb-[30px]">
                <h3>
                    Key words{" "}
                    <span className="text-red text-[15px]">*only letters and numbers</span>
                </h3>
                <input
                    className="border border-grey-light rounded px-[5px] w-[100%]"
                    placeholder="certain-key-words"
                    value={props.keywords}
                    onChange={(event) =>
                        props.setKeywords(
                            event.target.value
                                .replace(" ", "-")
                                .replace(/[,./\\!@#$%^&*()_+=<>?`~;:'"|]/g, "")
                        )
                    }
                />
                <p className="text-grey-light text-[12px]">
                    sciquel.org/stories/{props.date || "yyyy/mm/dd"}/
                    {props.keywords || "certain-key-words"}
                </p>
            </div>
            <div className="mb-[30px]">
                <h3>Publish Date</h3>
                <input
                    className="border border-grey-light rounded px-[5px] w-[100%]"
                    type="date"
                    value={props.date.replaceAll("/", "-")}
                    onChange={(event) => props.setDate(event.target.value.replaceAll("-", "/"))}
                />
            </div>
            <div className="media-type mb-[30px]">
                {displayTypes("Media Type", props.mediaTypes, props.mediaType, props.setMediaType)}
                {displayTypes(
                    "Article Type",
                    props.articleTypes,
                    props.articleType,
                    props.setArticleType
                )}
            </div>
            <Tags {...tagsProps} />
            <Contributors {...contributorsProps} />
        </>
    );
}
