import { Button } from "@nextui-org/react";
import AcknowledgementsEditor from "../acknowledgements/editor/acknowledgements";
import CoverImageEditor from "../cover_image/editor/coverImage";
import HeadingContainerEditor from "../heading/editor/headingContainer";
import SectionContainerEditor from "../section_container/editor/sectionContainer";
import TopSection from "../top_section/topSection";
import TriviaContainerEditor from "../trivia/editor/triviaContainer";
import CoverImagePreview from "../cover_image/preview/coverImage";
import GeneralByline from "../general_byline/generalByline";
import TriviaContainerPreview from "../trivia/preivew/triviaContainer";
import SectionContainerPreview from "../section_container/preview/sectionContainer";
import AcknowledgementsPreview from "../acknowledgements/preview/acknowledgements";
import ArticleEditor from "./articleEditor";
import ArticlePreview from "./articlePreview";

export default function Article(props: any) {
    const headingProps = {
        heading: props.heading,
        setHeading: props.setHeading,
        subheading: props.subheading,
        setSubheading: props.setSubheading,
    };

    const imageProps = {
        image: props.image,
        setImage: props.setImage,
        finalImage: props.finalImage,
        setFinalImage: props.setFinalImage,
        headingProps,
    };

    const topSectionProps = {
        keywords: props.keywords,
        setKeywords: props.setKeywords,
        date: props.date,
        setDate: props.setDate,
        mediaType: props.mediaType,
        setMediaType: props.setMediaType,
        mediaTypes: props.mediaTypes,
        articleType: props.articleType,
        setArticleType: props.setArticleType,
        articleTypes: props.articleTypes,
        topics: props.topics,
        setTopics: props.setTopics,
        subtopics: props.subtopics,
        setSubtopics: props.setSubtopics,
        subjects: props.subjects,
        setSubjects: props.setSubjects,
        tagName: props.tagName,
        setTagName: props.setTagName,
        tagColor: props.tagColor,
        setTagColor: props.setTagColor,
        allContributors: props.allContributors,
        setAllContributors: props.setAllContributors,
        contributors: props.contributors,
        setContributors: props.setContributors,
    };

    const generalProps = {
        topSection: topSectionProps,
    };

    const triviaProps = {
        trivia: props.trivia,
        setTrivia: props.setTrivia,
    };

    const sectionContainerProps = {
        section: props.section,
        setSection: props.setSection,
    };

    const acknowldgeProps = {
        contributors: props.contributors,
        setContributors: props.setContributors,
    };
    const articleProps = {
        heading: props.heading,
        setHeading: props.setHeading,
        subheading: props.subheading,
        setSubheading: props.setSubheading,
        image: props.image,
        setImage: props.setImage,
        finalImage: props.finalImage,
        setFinalImage: props.setFinalImage,
        keywords: props.keywords,
        setKeywords: props.setKeywords,
        date: props.date,
        setDate: props.setDate,
        mediaType: props.mediaType,
        setMediaType: props.setMediaType,
        mediaTypes: props.mediaTypes,
        articleType: props.articleType,
        setArticleType: props.setArticleType,
        articleTypes: props.articleTypes,
        topics: props.topics,
        setTopics: props.setTopics,
        subtopics: props.subtopics,
        setSubtopics: props.setSubtopics,
        subjects: props.subjects,
        setSubjects: props.setSubjects,
        tagName: props.tagName,
        setTagName: props.setTagName,
        tagColor: props.tagColor,
        setTagColor: props.setTagColor,
        allContributors: props.allContributors,
        setAllContributors: props.setAllContributors,
        contributors: props.contributors,
        setContributors: props.setContributors,
        trivia: props.trivia,
        setTrivia: props.setTrivia,
        section: props.section,
        setSection: props.setSection,
    };

    return (
        <main className="article grid">
            <ArticleEditor {...articleProps} />
            <ArticlePreview {...articleProps} />
        </main>
    );
}