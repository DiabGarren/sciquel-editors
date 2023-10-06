"use client";
import CoverImageEditor from "@/components/cover_image/editor/coverImageEditor";
import CoverImagePreview from "@/components/cover_image/preview/coverImagePreivew";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainerEditor from "@/components/heading/editor/headingContainerEditor";
import HeadingContainerPreview from "@/components/heading/preview/headingContainerPreview";
import TableContainer from "@/components/table_graph/tableContainer";
import TopSection from "@/components/top_section/topSection";
import { useState } from "react";

export default function NewPage(props: any) {
    const [preview, setPreview] = useState(false);

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
        headingProps
    };

    const previewButton = () => {
        let text;
        let clickFunc;
        if (preview) {
            text = "End preview";
            clickFunc = () => setPreview(false);
        } else {
            text = "Preview page";
            clickFunc = () => setPreview(true);
        }
        return (
            <button
                className="button absolute right-[0px] py-[10px] px-[10px] text-[1.1rem]"
                style={{ boxShadow: "0 0 10px black" }}
                onClick={clickFunc}
            >
                {text}
            </button>
        );
    };

    return (
        <main className="grid"
        style={{gridTemplateColumns: "650px 1200px"}}
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
            {/* <div className="sticky w-[850px] mx-[auto] top-[20px]">{previewButton()}</div> */}
            <div className="p-[15px]">
                <div>
                    <CoverImageEditor {...imageProps} />
                </div>
                <div>
                    <HeadingContainerEditor {...headingProps} />
                </div>
            </div>
            <div className="relative">
                <CoverImagePreview {...imageProps} />

            </div>
            {/* 
            <TopSection {...topSectionProps} />
            <TableContainer {...graphProps} />
            <GeneralByline {...generalProps} /> */}
        </main>
    );
}
