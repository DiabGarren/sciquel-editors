"use client";
import { useState } from "react";
import Article from "@/components/article/article";

export default function NewPage() {
    const [image, setImage] = useState(null);
    const [finalImage, setFinalImage] = useState(null);

    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    const [keywords, setKeywords] = useState("");
    const today = new Date();
    const [date, setDate] = useState(
        `${today.getFullYear()}/${
            (today.getMonth() + 1).toString().length === 1
                ? "0" + today.getMonth() + 1
                : today.getMonth() + 1
        }/${today.getDate().toString().length === 1 ? "0" + today.getDate() : today.getDate()}`
    );

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

    const [trivia, setTrivia] = useState([
        { name: "pre", questions: [] },
        { name: "post", questions: [] },
    ]);

    const [section, setSection] = useState([]);

    const [dictionary, setDictionary] = useState([]);

    const [error, setError] = useState<string[]>([]);
    const [missing, setMissing] = useState<string[]>([]);

    const createArticle = () => {
        try {
            return fetch(process.env.NEXT_PUBLIC_API_URL + "/article", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    heading: heading,
                    subheading: subheading,
                    finalImage: finalImage,
                    keywords: keywords,
                    date: date,
                    mediaType: mediaType,
                    articleType: articleType,
                    topics: topics,
                    subtopics: subtopics,
                    subjects: subjects,
                    contributors: contributors,
                    trivia: trivia,
                    section: section,
                    dictionary: dictionary,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    return data;
                })
                .catch((error) => {
                    console.log(error);
                    return error;
                });
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
        dictionary,
        setDictionary,
        error,
        setError,
        missing,
        setMissing,
    };

    return (
        <Article
            {...articleProps}
            submit={createArticle}
            method="Create"
        />
    );
}
