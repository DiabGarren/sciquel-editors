import AcknowledgementsPreview from "../acknowledgements/preview/acknowledgements";
import CoverImagePreview from "../cover_image/preview/coverImage";
import GeneralByline from "../general_byline/generalByline";
import DictionaryContainerPreview from "../section_container/dictionary_container/preview/dictionaryContainer";
import SectionContainerPreview from "../section_container/preview/sectionContainer";
import TriviaContainerPreview from "../trivia/preivew/triviaContainer";

export default function ArticlePreview(props: any) {
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

    const generalProps = {
        topSection: {
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
        },
    };

    const triviaProps = {
        trivia: props.trivia,
        setTrivia: props.setTrivia,
    };

    const sectionContainerProps = {
        section: props.section,
        setSection: props.setSection,
        dictionary: props.dictionary,
    };

    const dictionaryProps = {
        dictionary: props.dictionary,
        setDictionary: props.setDictionary,
    };

    const acknowldgeProps = {
        contributors: props.contributors,
        setContributors: props.setContributors,
    };
    return (
        <div className="relative">
            <CoverImagePreview {...imageProps} />
            <div className="mx-[10px]">
                <GeneralByline {...generalProps} />
            </div>
            <div className="mx-[10px]">
                <TriviaContainerPreview
                    {...triviaProps}
                    triviaPosition="pre"
                />
            </div>
            <div className="sections-preview mx-auto max-w-[800px]">
                <SectionContainerPreview {...sectionContainerProps} />
            </div>
            <div className="mx-[10px]">
                <TriviaContainerPreview
                    {...triviaProps}
                    triviaPosition="post"
                />
            </div>
            <div className="mx-[10px]">
                <hr className="my-[15px] h-[3px] bg-teal-dark border-none rounded-[2px]" />
                <AcknowledgementsPreview {...acknowldgeProps} />
            </div>
            <div className="mx-[10px]">
                <DictionaryContainerPreview {...dictionaryProps} />
            </div>
        </div>
    );
}
