"use client";

import Article from "@/components/article/article";
import ArticlePreview from "@/components/article/articlePreview";
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

    useEffect(() => {
        async function fetchData() {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/article/" + params.slug.join("/"))
                .then((response) => response.json())
                .then((data) => {
                    setHeading(data.data.heading);
                    setSubheading(data.data.subheading);
                    setFinalImage(data.data.finalImage);
                    setKeywords(data.data.keywords);
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
    };

    return (
        <main>
            <ArticlePreview
                {...articleProps}
                read={true}
            />
        </main>
    );
}
