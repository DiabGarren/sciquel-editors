import ArticleEditor from "./articleEditor";
import ArticlePreview from "./articlePreview";

export default function Article(props: any) {
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
        dictionary: props.dictionary,
        setDictionary: props.setDictionary,
        method: props.method,
        submit: props.submit,
        error: props.error,
        setError: props.setError,
        missing: props.missing,
        setMissing: props.setMissing,
    };

    return (
        <main className="article grid lr:grid-cols-2 xl:grid-cols-[2fr_3fr]">
            <ArticleEditor {...articleProps} />
            <ArticlePreview {...articleProps} />
        </main>
    );
}
