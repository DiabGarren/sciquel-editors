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

    const tagsProps = {
        handleDrp: handleDrp,
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
        handleDrp: handleDrp,
        allContributors: props.allContributors,
        setAllContributors: props.setAllContributors,
        contributors: props.contributors,
        setContributors: props.setContributors,
    };

    return (
        <div className="w-[750px] mx-[auto]">
            <div className="w-[450px] my-[15px]">
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
                        props.setUrlSlug(event.target.value.replace(" ", "-").replace(/[,./\\!@#$%^&*()_+=<>?`~;:'"|]/g, ""))
                    }
                />
                <p className="text-grey-light text-[12px]">
                    sciquel.org/stories/yyyy/mm/dd/{props.urlSlug || "certain-key-words"}
                </p>
            </div>
            <div
                className="grid mb-[30px]"
                style={{ gridTemplateColumns: "450px 1fr" }}
            >
                <div className="relative">
                    Media Type
                    <div>
                        <input
                            className="MediaType inline w-[250px] rounded border cursor-pointer px-[5px]"
                            value={props.mediaType}
                            onClick={() => handleDrp(".MediaType-drp")}
                            readOnly
                        />
                    </div>
                    <div className="drp MediaType-drp flex-col absolute w-[250px] rounded border bg-white z-10 hidden">
                        {displayTypes(
                            props.mediaTypes,
                            props.setMediaType,
                            ".MediaType-drp"
                        )}
                    </div>
                </div>
                {articleType()}
            </div>
            <Tags {...tagsProps} />
            <Contributors {...contributorsProps} />
        </div>
    );
}
