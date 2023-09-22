"use client";
import ImageContainer from "@/components/cover_image/ImageContainer";
import GeneralByline from "@/components/general_byline/GeneralByline";
import TableContainer from "@/components/table_graph/TableContainer";
import TopSection from "@/components/top_section/TopSection";
import { useState, useRef } from "react";
import { type Crop, type PixelCrop } from "react-image-crop";

type Props = {
    topics: [Topics];
};

type Topics = {
    _id: string;
    name: string;
    color: string;
    checked: boolean;
};

export async function getServerSideProps() {
    try {
        let res = await fetch("http://localhost:3000/api/getTopics");
        let topics = await res.json();

        return { props: { topics: JSON.parse(JSON.stringify(topics)) } };
    } catch (err) {
        console.log(err);
    }
}

export default function Home(props: Props) {
    const [mediaType, setMediaType] = useState("Article");
    const mediaTypes = ["Article", "Podcast", "Video", "Infographic"];

    const [articleType, setArticleType] = useState("Essay");
    const articleTypes = ["Essay", "Digest"];

    const [topic, setTopic] = useState<[Topics]>(props.topics);

    const [topics, setTopics] = useState([
        { name: "Geology", color: "#22C55E", checked: false },
        { name: "Chemistry", color: "#EF4444", checked: false },
        { name: "Biology", color: "#3B82F6", checked: false },
        { name: "Comp Sci.", color: "#f97316", checked: false },
        { name: "Astronomy", color: "#EAB308", checked: false },
        { name: "Medicine", color: "#84CC16", checked: false },
        { name: "Mathematics", color: "#10B981", checked: false },
        { name: "Physics", color: "#06B6D4", checked: false },
        { name: "Psychology", color: "#D946EF", checked: false },
        { name: "Sociology", color: "#14B8A6", checked: false },
        { name: "Technology", color: "#EC4899", checked: false },
        { name: "Envir. Science", color: "#F43F5E", checked: false },
        { name: "Mechanical Eng.", color: "#6366F1", checked: false },
        { name: "Electrical Eng.", color: "#8B5CF6", checked: false },
        { name: "Chemical Eng.", color: "#84CC16", checked: false },
    ]);

    const [subtopics, setSubtopics] = useState([
        { name: "Oncology", color: "#84CC16", checked: false },
        { name: "Cardiology", color: "#84CC16", checked: false },
        { name: "Rheumatology", color: "#D946EF", checked: false },
        { name: "Mineralogy", color: "#F59E0B", checked: false },
        { name: "Geochemistry", color: "#3B82F6", checked: false },
        { name: "Paleontology", color: "#D946EF", checked: false },
        { name: "Tectonics", color: "#F59E0B", checked: false },
        { name: "Artificial Intelligence", color: "#EF4444", checked: false },
        { name: "Internet of things", color: "#F59E0B", checked: false },
        { name: "Robotics", color: "#8B5CF6", checked: false },
    ]);

    const [subjects, setSubjects] = useState([
        { name: "Anatomy", color: "#EF4444", checked: false },
        { name: "Biochemistry", color: "#EC4899", checked: false },
        { name: "Genetics", color: "#EF4444", checked: false },
        { name: "Nutrition", color: "#14B8A6", checked: false },
        { name: "Mineralogy", color: "#A855F7", checked: false },
        { name: "Geochronology", color: "#22C55E", checked: false },
        { name: "Geophysics", color: "#F59E0B", checked: false },
        { name: "Risk Management", color: "#A855F7", checked: false },
        { name: "Programming", color: "#14B8A6", checked: false },
        { name: "Data Management", color: "#EC4899", checked: false },
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

    const topSectionProps = {
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
                        !event.target.parentNode.parentNode.children[0].classList.contains(
                            "tagDrp"
                        ) &&
                        !event.target.classList.contains(
                            "tagDrp"
                        )
                    ) {
                        el?.classList.add("hidden");
                        el?.classList.remove("flex");
                    }
                });
            }}
        >
            {/* <ImageContainer {...imageProps} /> */}
            <TopSection {...topSectionProps} />
            <TableContainer {...graphProps} />
            <GeneralByline {...generalProps} />
        </main>
    );
}
