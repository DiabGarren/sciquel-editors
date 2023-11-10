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

    return (
        <main className="article grid">
            <div className="p-[15px] pb-[50px]">
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
                    <AcknowledgementsEditor {...acknowldgeProps} />
                </div>
                <Button onClick={props.submit}>{props.method} Article</Button>
            </div>
            <div className="relative">
                <CoverImagePreview {...imageProps} />
                <div className="preview ">
                    <GeneralByline {...generalProps} />
                </div>
                <div className="preview">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="pre"
                    />
                </div>
                <div className="mx-auto max-w-[800px]">
                    <SectionContainerPreview {...sectionContainerProps} />
                </div>
                <div className="preview">
                    <TriviaContainerPreview
                        {...triviaProps}
                        triviaPosition="post"
                    />
                </div>
                <div className="preview">
                    <hr className="my-[15px] h-[3px] bg-teal-dark border-none rounded-[2px]" />
                    <AcknowledgementsPreview {...acknowldgeProps} />
                </div>
            </div>
        </main>
    );
}
