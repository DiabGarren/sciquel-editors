import Image from "next/image";
import { join } from "path";

export default function ImageContainer(props: any) {
    const upload = async () => {
        const data = new FormData();
        data.set("file", props.image);
        const res = await fetch("/api/upload", {
            method: "POST",
            body: data,
        });
        const json = await res.json();
        props.setFinalImage(props.image);
    };

    const displayImage = () => {
        if (!props.finalImage) {
            return <></>;
        }
        
        return (
            <Image
                src={`/images/${props.finalImage.name}`}
                alt={""}
                width={250}
                height={250}
            />
            // <img src={`/images/${props.finalImage.name}`} width={250}/>
        );
    };
    return (
        <div className="my-[15px]">
            <h3>Cover Image</h3>
            <input
                className="block"
                type="file"
                onChange={(event) => {
                    props.setFinalImage(null);
                    props.setImage(event.target.files?.[0]);
                }}
                accept="image/png, image/gif, image/jpeg"
            />
            <button className="button" onClick={upload}>
                Upload
            </button>
            {displayImage()}
        </div>
    );
}
