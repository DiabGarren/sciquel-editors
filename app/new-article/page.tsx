"use client";
import CoverImagePreview from "@/components/cover_image/preview/coverImage";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainerEditor from "@/components/heading/editor/headingContainer";
import TableContainer from "@/components/table_graph/tableContainer";
import TopSection from "@/components/top_section/topSection";
import { useState } from "react";
import CoverImageEditor from "@/components/cover_image/editor/coverImage";
import AcknowledgementsPreview from "@/components/acknowledgements/preview/acknowledgements";
import AcknowledgementsEditor from "@/components/acknowledgements/edit/acknowledgements";
import TriviaContainerEditor from "@/components/trivia/editor/triviaContainer";
import TriviaContainerPreview from "@/components/trivia/preivew/triviaContainer";

export default function NewPage(props: any) {
    const [image, setImage] = useState(null);
    const [finalImage, setFinalImage] = useState(null);

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
        { name: "Author", contributors: [], checked: false },
        { name: "Animator", verb: "animated", contributors: [], checked: false },
        {
            name: "Illustrator",
            verb: "illustrated",
            contributors: [],
            checked: false,
        },
        {
            name: "Photographer",
            verb: "photographed",
            contributors: [],
            checked: false,
        },
    ]);

    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    const [trivia, setTrivia] = useState([
        { name: "pre", questions: [] },
        { name: "post", questions: [] },
    ]);

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

    const triviaProps = {
        trivia,
        setTrivia,
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
        <main className="grid">
            <div className="p-[15px] pb-[50px]">
                <div className="mb-[30px]">
                    <CoverImageEditor {...imageProps} />
                </div>
                <div className="mb-[30px]">
                    <HeadingContainerEditor {...headingProps} />
                </div>
                <div className="mb-[30px]">
                    <TopSection {...topSectionProps} />
                </div>
                <div className="mb-[30px] border border-grey-light-1 p-[7px] rounded-lr">
                    <TriviaContainerEditor
                        {...triviaProps}
                        triviaPosition="pre"
                    />
                </div>
                <div className="mb-[30px]">
                    <AcknowledgementsEditor {...acknowldgeProps} />
                </div>
            </div>
            <div className="relative">
                <CoverImagePreview {...imageProps} />
                <div className="preview mx-[auto]">
                    <GeneralByline {...generalProps} />
                </div>
                <div className="preview mx-[auto]">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="pre"
                    />
                </div>
                <div className="preview mx-[auto]">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="post"
                    />
                </div>
                <div className="preview m-[auto]">
                    <hr className="my-[15px] h-[3px] bg-teal-dark border-none rounded-[2px]" />
                    <AcknowledgementsPreview {...acknowldgeProps} />
                </div>
            </div>
            {/* 
            <TableContainer {...graphProps} />
             */}
        </main>
    );
}
