"use client";
import ImageContainer from "@/components/cover_image/ImageContainer";
import TableContainer from "@/components/table_graph/TableContainer";
import { useState, useRef } from "react";
import { type Crop, type PixelCrop } from "react-image-crop";

export default function Home() {
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
        <main className="m-[50px]">
            {/* <TableContainer
                {...graphProps}
            /> */}
            <ImageContainer {...imageProps} />
        </main>
    );
}
