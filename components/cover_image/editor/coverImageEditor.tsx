import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function CoverImageEditor(props: any) {
    const upload = async () => {
        const data = new FormData();
        data.set("file", props.image);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
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
                className="rounded"
            />
        );
    };

    return (
        <>
            <h3>Cover Image</h3>
            <input
                className="block rounded
                "
                type="file"
                onChange={(event) => {
                    props.setFinalImage(null);
                    props.setImage(event.target.files?.[0]);
                }}
                accept="image/png, image/gif, image/jpeg"
            />
            <Button variant="solid" color="primary" radius="md" className="my-[2px]" onClick={upload}>
                Upload
            </Button>
            {displayImage()}
        </>
    );
}
