"use client";

import Article from "@/components/article/article";
import { useEffect, useState } from "react";

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

    const [trivia, setTrivia] = useState([]);

    const [section, setSection] = useState([]);

    const [dictionary, setDictionary] = useState([]);

    const [error, setError] = useState<string[]>([]);
    const [missing, setMissing] = useState<string[]>([]);

    useEffect(() => {
        async function fetchData() {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/article/" + params.slug.join("/"))
                .then((response) => response.json())
                .then((data) => {
                    setHeading(data.data.heading);
                    setSubheading(data.data.subheading);
                    setFinalImage(data.data.finalImage);
                    setKeywords(data.data.urlSlug.split("/")[3]);
                    setDate(data.data.date);
                    setMediaType(data.data.mediaType);
                    setArticleType(data.data.articleType);
                    setTopics(data.data.topics);
                    setSubtopics(data.data.subtopics);
                    setSubjects(data.data.subjects);
                    setContributors(data.data.contributors);
                    setTrivia(data.data.trivia);
                    setSection(data.data.section);
                    setDictionary(data.data.dictionary);
                });
            fetch(process.env.NEXT_PUBLIC_API_URL + "/top-section")
                .then((response) => response.json())
                .then((data) => {
                    setAllContributors(data.contributors);
                });
        }
        fetchData();
    }, [params.slug]);

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
                    section: section,
                    dictionary: dictionary,
                }),
            }).then((response) => response.json());
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
            submit={updateArticle}
            method="Update"
        />
    );
}
