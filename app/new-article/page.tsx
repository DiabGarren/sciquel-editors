"use client";
import CoverImagePreview from "@/components/cover_image/preview/coverImagePreivew";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainerEditor from "@/components/heading/editor/headingContainerEditor";
import TableContainer from "@/components/table_graph/tableContainer";
import TopSection from "@/components/top_section/topSection";
import { useState } from "react";
import CoverImageEditor from "@/components/cover_image/editor/coverImageEditor";
import AcknowledgementsPreview from "@/components/acknowledgements/preview/AcknowledgementsPreview";
import AcknowledgementsEditor from "@/components/acknowledgements/edit/AcknowledgementsEditor";

export default function NewPage(props: any) {
    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    const [urlSlug, setUrlSlug] = useState("");
    const [mediaType, setMediaType] = useState("Article");
    const mediaTypes = [
        { key: "article", name: "Article" },
        { key: "podcast", name: "Podcast" },
        { key: "video", name: "Video" },
        { key: "infographic", name: "Infographic" },
    ];

    const [articleType, setArticleType] = useState("Essay");
    const articleTypes = [
        { key: "essay", name: "Essay" },
        { key: "digest", name: "Digest" },
    ];

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
        heading,
        setHeading,
        subheading,
        setSubheading,
    };

    const imageProps = {
        image,
        setImage,
        finalImage,
        setFinalImage,
        headingProps,
    };

    const topSectionProps = {
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

    const acknowldgeProps = {
        contributors,
        setContributors,
    };

    const graphProps = {
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

    return (
        <main className="grid" style={{ gridTemplateColumns: "650px 1210px" }}>
            <div
                className="p-[15px] pb-[50px]"
                style={{
                    height: "955px",
                    maxHeight: "955px",
                    overflowY: "auto",
                }}
            >
                <div className="mb-[30px]">
                    <CoverImageEditor {...imageProps} />
                </div>
                <div className="mb-[30px]">
                    <HeadingContainerEditor {...headingProps} />
                </div>
                <div className="mb-[30px]">
                    <TopSection {...topSectionProps} />
                </div>
                <div className="mb-[30px]">
                    <AcknowledgementsEditor {...acknowldgeProps} />
                </div>
            </div>
            <div
                className="relative"
                style={{
                    height: "955px",
                    maxHeight: "955px",
                    overflowY: "auto",
                }}
            >
                <CoverImagePreview {...imageProps} />
                <div className="w-article mx-[auto]">
                    <GeneralByline {...generalProps} />
                </div>
                <div className="w-article m-[auto]">
                    <hr className="my-[15px] h-[3px] bg-cyan-dark border-none rounded-[2px]" />
                    <AcknowledgementsPreview {...acknowldgeProps} />
                </div>
            </div>
            {/* 
            <TableContainer {...graphProps} />
             */}
        </main>
    );
}
