"use client";

import Article from "@/components/article/article";
import ArticlePreview from "@/components/article/articlePreview";
import { useState } from "react";

export default function Page({ params }: { params: { slug: string[] } }) {
    const [image, setImage] = useState(null);
    const [finalImage, setFinalImage] = useState(null);

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    const [keywords, setKeywords] = useState("");
    const [date, setDate] = useState("");

    const [mediaType, setMediaType] = useState("");
    const mediaTypes = [
        { key: "article", name: "Article" },
        { key: "podcast", name: "Podcast" },
        { key: "video", name: "Video" },
        { key: "infographic", name: "Infographic" },
    ];

    const [articleType, setArticleType] = useState("");
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

    const [contributors, setContributors] = useState([]);

    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    const [trivia, setTrivia] = useState([]);

    const [section, setSection] = useState([]);

    if (
        (heading && heading === "") ||
        (subheading && subheading === "") ||
        (finalImage && finalImage === null) ||
        (keywords && keywords === "") ||
        (date && date === "") ||
        (mediaType && mediaType === "") ||
        (articleType && articleType === "") ||
        (topics && topics.length === 0) ||
        (subtopics && subtopics.length === 0) ||
        (subjects && subjects.length === 0) ||
        (contributors && contributors.length === 0) ||
        (allContributors && allContributors.length === 0) ||
        (trivia && trivia.length === 0) ||
        (section && section.length === 0)
    ) {
        fetch(process.env.NEXT_PUBLIC_API_URL + "/article/" + params.slug.join("/"))
            .then((response) => response.json())
            .then((data) => {
                if (heading === "" && heading !== data.data.heading) {
                    setHeading(data.data.heading);
                }
                if (subheading === "" && subheading !== data.data.subheading) {
                    setSubheading(data.data.subheading);
                }
                if (finalImage === null && finalImage != data.data.finalImage) {
                    setFinalImage(data.data.finalImage);
                }
                if (keywords === "" && keywords !== data.data.keywords) {
                    setKeywords(data.data.keywords);
                }
                if (date === "" && date !== data.data.date) {
                    setDate(data.data.date);
                }
                if (mediaType === "" && mediaType !== data.data.mediaType) {
                    setMediaType(data.data.mediaType);
                }
                if (articleType === "" && articleType !== data.data.articleType) {
                    setArticleType(data.data.articleType);
                }
                if (topics.length === 0 && topics !== data.data.topics) {
                    setTopics(data.data.topics);
                }
                if (subtopics.length === 0 && subtopics !== data.data.subtopics) {
                    setSubtopics(data.data.subtopics);
                }
                if (subjects.length === 0 && subjects !== data.data.subjects) {
                    setSubjects(data.data.subjects);
                }
                // if (contributors.length === 0) {
                //     setContributors(data.data.contributors);
                // }
                if (allContributors.length === 0 && allContributors !== data.data.allContributors) {
                    setAllContributors(data.data.contributors);
                }
                if (trivia.length === 0 && trivia !== data.data.trivia) {
                    setTrivia(data.data.trivia);
                }
                // if (section.length === 0 && section !== data.data.section) {
                //     setSection(data.data.section);
                // }
            });
    }
    const updateArticle = () => {
        try {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/article/" + date + "/" + keywords, {
                method: "Put",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    heading: heading,
                    subheading: subheading,
                    finalImage: finalImage,
                    urlSlug: keywords,
                    date: date,
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

    const articleProps = {
        heading,
        setHeading,
        subheading,
        setSubheading,
        image,
        setImage,
        finalImage,
        setFinalImage,
        keywords,
        setKeywords,
        date,
        setDate,
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
        trivia,
        setTrivia,
        section,
        setSection,
    };

    return (
        <main>
            <ArticlePreview {...articleProps} />
        </main>
    );
}
