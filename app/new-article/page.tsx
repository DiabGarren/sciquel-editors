"use client";

import CoverImagePreview from "@/components/cover_image/preview/coverImage";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainerEditor from "@/components/heading/editor/headingContainer";
import TopSection from "@/components/top_section/topSection";
import CoverImageEditor from "@/components/cover_image/editor/coverImage";
import AcknowledgementsPreview from "@/components/acknowledgements/preview/acknowledgements";
import AcknowledgementsEditor from "@/components/acknowledgements/editor/acknowledgements";
import TriviaContainerEditor from "@/components/trivia/editor/triviaContainer";
import TriviaContainerPreview from "@/components/trivia/preivew/triviaContainer";
import SectionContainerPreview from "@/components/section_container/preview/sectionContainer";
import SectionContainerEditor from "@/components/section_container/editor/sectionContainer";
import { useState } from "react";
import { Button } from "@nextui-org/react";

export default function NewPage() {
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

    if (
        topics.length === 0 ||
        subtopics.length === 0 ||
        subjects.length === 0 ||
        allContributors.length === 0
    ) {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/top-section")
            .then((response) => response.json())
            .then((data) => {
                if (topics.length === 0) {
                    setTopics(data.topics);
                }
                if (subtopics.length === 0) {
                    setSubtopics(data.subtopics);
                }
                if (subjects.length === 0) {
                    setSubjects(data.subjects);
                }
                if (allContributors.length === 0) {
                    setAllContributors(data.contributors);
                }
            });
    }

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

    const [section, setSection] = useState([]);

    const headingProps = {
        heading: heading,
        setHeading: setHeading,
        subheading: subheading,
        setSubheading: setSubheading,
    };

    const imageProps = {
        image: image,
        setImage: setImage,
        finalImage: finalImage,
        setFinalImage: setFinalImage,
        headingProps,
    };

    const topSectionProps = {
        urlSlug: urlSlug,
        setUrlSlug: setUrlSlug,
        mediaType: mediaType,
        setMediaType: setMediaType,
        mediaTypes: mediaTypes,
        articleType: articleType,
        setArticleType: setArticleType,
        articleTypes: articleTypes,
        topics: topics,
        setTopics: setTopics,
        subtopics: subtopics,
        setSubtopics: setSubtopics,
        subjects: subjects,
        setSubjects: setSubjects,
        tagName: tagName,
        setTagName: setTagName,
        tagColor: tagColor,
        setTagColor: setTagColor,
        allContributors: allContributors,
        setAllContributors: setAllContributors,
        contributors: contributors,
        setContributors: setContributors,
    };

    const generalProps = {
        topSection: topSectionProps,
    };

    const triviaProps = {
        trivia: trivia,
        setTrivia: setTrivia,
    };

    const sectionContainerProps = {
        section: section,
        setSection: setSection,
    };

    const acknowldgeProps = {
        contributors: contributors,
        setContributors: setContributors,
    };

    const createArticle = () => {
        try {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/article", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    heading: heading,
                    subheading: subheading,
                    finalImage: finalImage,
                    urlSlug: urlSlug,
                    mediaType: mediaType,
                    articleType: articleType,
                    topics: topics,
                    subtopics: subtopics,
                    subjects: subjects,
                    contributors: contributors,
                    trivia: trivia,
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main className="article grid">
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
                    <SectionContainerEditor {...sectionContainerProps} />
                </div>
                <div className="mb-[30px]">
                    <AcknowledgementsEditor {...acknowldgeProps} />
                </div>
                <Button onClick={createArticle}>Create Article</Button>
            </div>
            <div className="relative">
                <CoverImagePreview {...imageProps} />
                <div className="preview ">
                    <GeneralByline {...generalProps} />
                </div>
                <div className="preview">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="pre"
                    />
                </div>
                <div className="mx-auto max-w-[800px]">
                    <SectionContainerPreview {...sectionContainerProps} />
                </div>
                <div className="preview">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="post"
                    />
                </div>
                <div className="preview">
                    <hr className="my-[15px] h-[3px] bg-teal-dark border-none rounded-[2px]" />
                    <AcknowledgementsPreview {...acknowldgeProps} />
                </div>
            </div>
        </main>
    );
}
