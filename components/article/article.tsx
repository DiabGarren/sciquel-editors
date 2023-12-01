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
    };

    return (
        <main className="article grid">
            <a
                href="/"
                className="flex items-center gap-[2px] w-fit p-[2px_5px] hover:text-teal hover:underline [&_path]:hover:fill-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9"
                    height="12"
                    viewBox="0 0 11 14"
                    fill="none">
                    <path
                        d="M10 13L1 7L10 1V13Z"
                        fill="#109191"
                        stroke="#109191"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
                Back
            </a>

            <ArticleEditor {...articleProps} />
            {/* <ArticlePreview {...articleProps} /> */}
        </main>
    );
}
