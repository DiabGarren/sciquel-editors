import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import Contributors from "./contributors";
import Tags from "./tags";

/* eslint-disable react/jsx-key */
export default function TopSection(props: any) {
    if (
        props.topics &&
        props.subtopics &&
        props.subjects &&
        props.allContributors
    ) {
        if (
            props.topics.length === 0 ||
            props.subtopics.length === 0 ||
            props.subjects.length === 0 ||
            props.allContributors.length === 0
        ) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:3000/api/top-section");
            xhr.onload = () => {
                if (xhr.status === 200) {
                    if (props.topics.length === 0) {
                        props.setTopics(JSON.parse(xhr.responseText).topics);
                    }
                    if (props.subtopics.length === 0) {
                        props.setSubtopics(
                            JSON.parse(xhr.responseText).subtopics
                        );
                    }
                    if (props.subjects.length === 0) {
                        props.setSubjects(
                            JSON.parse(xhr.responseText).subjects
                        );
                    }
                    if (props.allContributors.length === 0) {
                        props.setAllContributors(
                            JSON.parse(xhr.responseText).contributors
                        );
                    }
                }
            };
            xhr.send();
        }
    }

    const displayTypes = (typeArray: any[], setType: any, typeDrp: string) => {
        let types = typeArray.map((type: string) => {
            return (
                <button
                    className="text-left hover:bg-blue-light px-[5px] py-[2px]"
                    onClick={() => {
                        setType(type);
                    }}
                >
                    {type}
                </button>
            );
        });
        return types;
    };

    const articleType = () => {
        if (props.mediaType === "Article") {
            return (
                <>
                    <span className="mr-[5px]">Article Type:</span>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="solid" color="primary">
                                {props.articleType}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dymanic Actions"
                            items={props.articleTypes}
                            variant="solid"
                            color="primary"
                        >
                            {(item: any) => (
                                <DropdownItem
                                    key={item.key}
                                    className={
                                        "px-[5px] hover:bg-blue hover:text-white"
                                    }
                                    onClick={() =>
                                        props.setArticleType(item.name)
                                    }
                                >
                                    {item.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </>
            );
        } else {
            return <></>;
        }
    };

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

    return (
        <>
            <div className="mb-[30px]">
                <h3>
                    Key words{" "}
                    <span className="text-red text-[15px]">
                        *only letters and numbers
                    </span>
                </h3>
                <input
                    className="border rounded px-[5px] w-[250px]"
                    placeholder="certain-key-words"
                    value={props.urlSlug}
                    onChange={(event) =>
                        props.setUrlSlug(
                            event.target.value
                                .replace(" ", "-")
                                .replace(/[,./\\!@#$%^&*()_+=<>?`~;:'"|]/g, "")
                        )
                    }
                />
                <p className="text-grey-light text-[12px]">
                    sciquel.org/stories/yyyy/mm/dd/
                    {props.urlSlug || "certain-key-words"}
                </p>
            </div>
            <div className="mb-[30px]">
                <div className="inline-block mr-[10px]">
                    <span className="mr-[5px]"> Media Type:</span>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="solid" color="primary">
                                {props.mediaType}
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu
                            aria-label="Dymanic Actions"
                            items={props.mediaTypes}
                            variant="solid"
                            color="primary"
                        >
                            {(item: any) => (
                                <DropdownItem
                                    key={item.key}
                                    className={
                                        "px-[5px] hover:bg-blue hover:text-white"
                                    }
                                    onClick={() =>
                                        props.setMediaType(item.name)
                                    }
                                >
                                    {item.name}
                                </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="inline-block">{articleType()}</div>
            </div>
            <Tags {...tagsProps} />
            {/* <Contributors {...contributorsProps} />  */}
        </>
    );
}
