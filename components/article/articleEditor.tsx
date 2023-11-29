import { Button } from "@nextui-org/react";
import AcknowledgementsEditor from "../acknowledgements/editor/acknowledgements";
import CoverImageEditor from "../cover_image/editor/coverImage";
import HeadingContainerEditor from "../heading/editor/headingContainer";
import SectionContainerEditor from "../section_container/editor/sectionContainer";
import TopSection from "../top_section/topSection";
import TriviaContainerEditor from "../trivia/editor/triviaContainer";
import DictionaryContainerEditor from "../section_container/dictionary_container/editor/dictionaryContainer";

export default function ArticleEditor(props: any) {
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

    const triviaProps = {
        trivia: props.trivia,
        setTrivia: props.setTrivia,
    };

    const sectionContainerProps = {
        section: props.section,
        setSection: props.setSection,
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
        <div className="p-[10px] pb-[50px]">
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
                <DictionaryContainerEditor {...dictionaryProps} />
            </div>
            <div className="mb-[30px]">
                <AcknowledgementsEditor {...acknowldgeProps} />
            </div>
            <Button onClick={props.submit}>{props.method} Article</Button>
        </div>
    );
}
