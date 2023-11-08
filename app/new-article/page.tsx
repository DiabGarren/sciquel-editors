"use client";

import CoverImagePreview from "@/components/cover_image/preview/coverImage";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainerEditor from "@/components/heading/editor/headingContainer";
import TopSection from "@/components/top_section/topSection";
import CoverImageEditor from "@/components/cover_image/editor/coverImage";
import AcknowledgementsPreview from "@/components/acknowledgements/preview/acknowledgements";
import AcknowledgementsEditor from "@/components/acknowledgements/editor/acknowledgements";
import TriviaContainerEditor from "@/components/trivia/editor/triviaContainer";
import TriviaContainerPreview from "@/components/trivia/preivew/triviaContainer";
import SectionContainerPreview from "@/components/section_container/preview/sectionContainer";
import SectionContainerEditor from "@/components/section_container/editor/sectionContainer";
import NewArticleProps from "@/components/new_article_props/newArticleProps";
import { Button } from "@nextui-org/react";

export default function NewPage() {
    const props = NewArticleProps();

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
        urlSlug: props.urlSlug,
        setUrlSlug: props.setUrlSlug,
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

    const createArticle = () => {
        try {
            fetch(process.env.NEXT_PUBLIC_API_URL + "/article", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    heading: props.heading,
                    subheading: props.subheading,
                    finalImage: props.finalImage,
                    urlSlug: props.urlSlug,
                    mediaType: props.mediaType,
                    articleType: props.articleType,
                    topics: props.topics,
                    subtopics: props.subtopics,
                    subjects: props.subjects,
                    contributors: props.contributors,
                    trivia: props.trivia,
                }),
            })
                .then((response) => response.json())
                .then((data) => console.log(data));
        } catch (error) {
            console.log(error);
        }
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
                <Button onClick={createArticle}>Create Article</Button>
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
