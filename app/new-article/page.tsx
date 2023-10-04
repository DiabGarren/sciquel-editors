"use client";
import ImageContainer from "@/components/cover_image/imageContainer";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainer from "@/components/heading/headingContainer";
import TableContainer from "@/components/table_graph/tableContainer";
import TopSection from "@/components/top_section/topSection";
import { useState } from "react";

export default function NewPage(props: any) {
    const [preview, setPreview] = useState(true);

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    const [urlSlug, setUrlSlug] = useState("");
    const [mediaType, setMediaType] = useState("Article");
    const mediaTypes = ["Article", "Podcast", "Video", "Infographic"];

    const [articleType, setArticleType] = useState("Essay");
    const articleTypes = ["Essay", "Digest"];

    const [topics, setTopics] = useState([]);

    const [subtopics, setSubtopics] = useState([]);

    const [subjects, setSubjects] = useState([]);

    const [tagName, setTagName] = useState("");
    const [tagColor, setTagColor] = useState("#8ECAEC");

    const [allContributors, setAllContributors] = useState([]);
    const [contributors, setContributors] = useState([
        { name: "Animator", contributors: [], checked: false },
        { name: "Author", contributors: [], checked: false },
        { name: "Illustrator", contributors: [], checked: false },
    ]);

    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    const [image, setImage] = useState(null);
    const [finalImage, setFinalImage] = useState(null);

    const headingProps = {
        preview,
        heading,
        setHeading,
        subheading,
        setSubheading,
    };

    const topSectionProps = {
        preview,
        urlSlug,
        setUrlSlug,
        mediaType,
        setMediaType,
        mediaTypes,
        articleType,
        setArticleType,
        articleTypes,
        topics,
        setTopics,
        subtopics,
        setSubtopics,
        subjects,
        setSubjects,
        tagName,
        setTagName,
        tagColor,
        setTagColor,
        allContributors,
        setAllContributors,
        contributors,
        setContributors,
    };

    const generalProps = {
        topSection: topSectionProps,
    };

    const graphProps = {
        preview,
        manual,
        setManual,
        rows,
        setRows,
        cols,
        setCols,
        cell,
        setCell,
        type: graphType,
        setType: setGraphType,
    };

    const imageProps = {
        preview,
        image,
        setImage,
        finalImage,
        setFinalImage,
    };

    const previewButton = () => {
        if (preview) {
            return (
                <button
                    className="button absolute right-[25px]"
                    style={{boxShadow: "0 0 0 2px rgb(0,0,0)"}}
                    onClick={() => setPreview(false)}
                >
                    End preview
                </button>
            );
        } else {
            return (
                <button
                    className="button absolute right-[25px]"
                    onClick={() => setPreview(true)}
                >
                    Preview page
                </button>
            );
        }
    };

    return (
        <main
            onClick={(event: any) => {
                document.querySelectorAll(".drp").forEach((el) => {
                    if (
                        event.target.parentNode.parentNode.children[1] != el &&
                        !event.target.classList.contains("Drp")
                    ) {
                        el?.classList.add("hidden");
                        el?.classList.remove("flex");
                    }
                });
            }}
        >
                <div className="sticky top-[20px]">{previewButton()}</div>
                <ImageContainer {...imageProps} />
                <HeadingContainer {...headingProps} />
                <TopSection {...topSectionProps} />
                <TableContainer {...graphProps} />
                <GeneralByline {...generalProps} />
        </main>
    );
}
