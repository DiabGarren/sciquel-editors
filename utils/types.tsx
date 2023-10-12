import { Dispatch, SetStateAction } from "react";

export interface Contributor {
    name: string;
    image: string;
    message: string;
    checked: boolean;
}

export interface Type {
    name: string;
    verb: string;
    contributors: never[];
    checked: boolean;
}

export interface User {
    firstName: string;
    lastName: string;
    image: string;
}

export interface MediaType {
    key: string;
    name: string;
}

export interface Trivia {
    name: string;
    questions: never[];
}

export interface Question {
    number: number;
    type: string;
    content: any[];
}

export interface HeadingProps {
    heading: string;
    setHeading: Dispatch<SetStateAction<string>>;
    subheading: string;
    setSubheading: Dispatch<SetStateAction<string>>;
}

export interface ImageProps {
    image: string | Blob | any;
    setImage: Dispatch<SetStateAction<string>> | any;
    finalImage: string | Blob | any;
    setFinalImage: Dispatch<SetStateAction<string>> | any;
    headingProps: HeadingProps;
}

export interface TopSectionProps {
    urlSlug: string;
    setUrlSlug: Dispatch<SetStateAction<string>>;
    mediaType: string;
    setMediaType: Dispatch<SetStateAction<string>>;
    mediaTypes: MediaType[];
    articleType: string;
    setArticleType: Dispatch<SetStateAction<string>>;
    articleTypes: MediaType[];
    topics: never[];
    setTopics: Dispatch<SetStateAction<never[]>>;
    subtopics: never[];
    setSubtopics: Dispatch<SetStateAction<never[]>>;
    subjects: never[];
    setSubjects: Dispatch<SetStateAction<never[]>>;
    tagName: string;
    setTagName: Dispatch<SetStateAction<string>>;
    tagColor: string;
    setTagColor: Dispatch<SetStateAction<string>>;
    allContributors: never[];
    setAllContributors: Dispatch<SetStateAction<never[]>>;
    contributors: {
        name: string;
        verb: string;
        contributors: never[];
        checked: boolean;
    }[];
    setContributors: Dispatch<
        SetStateAction<
            {
                name: string;
                verb: string;
                contributors: never[];
                checked: boolean;
            }[]
        >
    >;
}

export interface TriviaProps {
    trivia: {
        name: string;
        questions: never[];
    }[];
    setTrivia: Dispatch<SetStateAction<{ name: string; questions: never[] }[]>>;
    triviaPosition: string;
}
