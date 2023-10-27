import { UploadButton } from "@/utils/uploadthing";
import { Button } from "@nextui-org/react";
import { AnyObject } from "mongoose";
import Image from "next/image";
import "@uploadthing/react/styles.css";

export default function CoverImageEditor(props: AnyObject) {
    // const upload = async () => {
    //     const data = new FormData();
    //     data.set("file", props.image);
    //     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
    //         method: "POST",
    //         body: data,
    //     });
    //     const json = await res.json();
    //     props.setFinalImage(props.image);
    // };

    // const displayImage = () => {
    //     if (!props.finalImage) {
    //         return <></>;
    //     }

    //     return (
    //         <Image
    //             src={`/images/${props.finalImage.name}`}
    //             alt={""}
    //             width={250}
    //             height={250}
    //             className="rounded"
    //         />
    //     );
    // };

    return (
        <>
            <h3>Cover Image</h3>
            {/*
            <input
                className="block rounded w-[300px]"
                type="file"
                onChange={(event) => {
                    props.setFinalImage(null);
                    props.setImage(event.target.files?.[0]);
                }}
                accept="image/png, image/gif, image/jpeg"
            />
            <Button
                variant="solid"
                color="primary"
                radius="md"
                className="my-[2px]"
                onClick={upload}>
                Upload
            </Button>
            {displayImage()} */}
            <UploadButton
                appearance={{
                    button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                }}
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    console.log("Files: ", res);
                    if (res) {
                        props.setFinalImage(res[0].url);
                    }
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    alert(`Error: ${error.message}`);
                }}
            />
        </>
    );
}
