/* eslint-disable react/jsx-key */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import Contributors from "./contributors";
import Tags from "./tags";
import { Dispatch, SetStateAction } from "react";

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
                <Dropdown>
                    <DropdownTrigger>
                        <Button
                            variant="solid"
                            color="primary">
                            {typeProp}
                        </Button>
                    </DropdownTrigger>
                    <DropdownMenu
                        aria-label="Dymanic Actions"
                        items={allTypesArray}
                        variant="solid"
                        color="primary">
                        {(item: any) => (
                            <DropdownItem
                                key={item.key}
                                className={"px-[5px] hover:bg-blue hover:text-white"}
                                onClick={() => setTypeProp(item.name)}>
                                {item.name}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
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
                    className="border border-grey-light rounded px-[5px] w-[250px]"
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
                    className="border border-grey-light rounded px-[5px] w-[250px]"
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
