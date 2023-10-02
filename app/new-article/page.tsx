"use client";
import ImageContainer from "@/components/cover_image/imageContainer";
import GeneralByline from "@/components/general_byline/generalByline";
import HeadingContainer from "@/components/heading/headingContainer";
import TableContainer from "@/components/table_graph/tableContainer";
import TopSection from "@/components/top_section/topSection";
import { useState, useRef } from "react";
import { type Crop, type PixelCrop } from "react-image-crop";

type Topics = {
    _id: string;
    name: string;
    color: string;
    checked: boolean;
};

export default function NewPage(props: any) {
    const [heading, setHeading] = useState("");
    const [subheading, setSubheading] = useState("");

    const [urlSlug, setUrlSlug] = useState("");
    const [mediaType, setMediaType] = useState("Article");
    const mediaTypes = ["Article", "Podcast", "Video", "Infographic"];

    const [articleType, setArticleType] = useState("Essay");
    const articleTypes = ["Essay", "Digest"];

    const [topics, setTopics] = useState([]);

    const [subtopics, setSubtopics] = useState([]);

    const [subjects, setSubjects] = useState([]);

    const [tagName, setTagName] = useState("");
    const [tagColor, setTagColor] = useState("#8ECAEC");

    const [allContributors, setAllContributors] = useState([]);
    const [contributors, setContributors] = useState([
        { name: "Animator", contributors: [], checked: false },
        { name: "Author", contributors: [], checked: false },
        { name: "Illustrator", contributors: [], checked: false },
    ]);

    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    const [image, setImage] = useState("");
    const imgRef = useRef<HTMLImageElement>(null);
    const previewCanvasRef = useRef<HTMLCanvasElement>(null);
    const [crop, setCrop] = useState<Crop>();
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
    const [scale, setScale] = useState(1);
    const [rotate, setRotate] = useState(0);

    const headingProps = {
        heading,
        setHeading,
        subheading,
        setSubheading,
    };

    const topSectionProps = {
        urlSlug,
        setUrlSlug,
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
    };

    const generalProps = {
        topSection: topSectionProps,
    };

    const graphProps = {
        manual,
        setManual,
        rows,
        setRows,
        cols,
        setCols,
        cell,
        setCell,
        type: graphType,
        setType: setGraphType,
    };

    const imageProps = {
        image,
        setImage,
        imgRef,
        previewCanvasRef,
        crop,
        setCrop,
        completedCrop,
        setCompletedCrop,
        scale,
        setScale,
        rotate,
        setRotate,
    };

    return (
        <main
            className="m-[50px]"
            onClick={(event: any) => {
                document.querySelectorAll(".drp").forEach((el) => {
                    if (
                        event.target.parentNode.parentNode.children[1] != el &&
                        !event.target.classList.contains("Drp")
                    ) {
                        el?.classList.add("hidden");
                        el?.classList.remove("flex");
                    }
                });
            }}
        >
            {/* <ImageContainer {...imageProps} /> */}
            <HeadingContainer {...headingProps} />
            <TopSection {...topSectionProps} />
            <TableContainer {...graphProps} />
            <GeneralByline {...generalProps} />
        </main>
    );
}
