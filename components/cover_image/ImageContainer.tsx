/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import ImagePreview from "./imagePreview";
import ReactCrop from "react-image-crop";

export default function ImageContainer(props: any) {
    const fileSelect = (event: any) => {
        if (event.target.files && event.target.files.length > 0) {
            props.setCrop(undefined);

            const file = new FileReader();
            file.addEventListener("load", () => {
                props.setImage(file.result?.toString() || "");
            });
            file.readAsDataURL(event.target.files[0]);
        }
    };

    useEffect(() => {
        const time = setTimeout(() => {
            (async () => {
                if (
                    props.completedCrop?.width &&
                    props.completeCrop?.height &&
                    props.imgRef.current &&
                    props.previewCanvasRef.current
                ) {
                    ImagePreview(
                        props.imgRef.current,
                        props.previewCanvasRef.current,
                        props.completedCrop
                    );
                }
            }).apply(undefined, props.completedCrop);
        }, 100);

        return () => {
            clearTimeout(time);
        };
    }, props.completedCrop);

    return (
        <div>
            <input type="file" accept="image/*" onChange={fileSelect} />
            {!!props.image && (
                <ReactCrop
                    crop={props.crop}
                    onChange={(_, percentCrop) => props.setCrop(percentCrop)}
                    minHeight={200}
                >
                    {/* <Image ref={props.imgRef} src={props.image} alt="" /> */}
                    <img src={props.image} alt="" />
                </ReactCrop>
            )}
            {!!props.completeCrop && (
                <>
                    <div>
                        <canvas ref={props.previewCanvasRef} className="border-1 fit-contain"/>
                    </div>
                </>
            )}
        </div>
    );
}
