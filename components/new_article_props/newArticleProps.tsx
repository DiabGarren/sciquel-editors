"use client";

import { useRef, useState } from "react";

export default function NewArticleProps() {
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

    return {
        heading,
        setHeading,
        subheading,
        setSubheading,

        image,
        setImage,
        finalImage,
        setFinalImage,

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

        trivia,
        setTrivia,

        section,
        setSection,
    };
}
