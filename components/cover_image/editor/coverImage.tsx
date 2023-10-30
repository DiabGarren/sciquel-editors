import { UploadButton } from "@/utils/uploadthing";
import { AnyObject } from "mongoose";
import "@uploadthing/react/styles.css";

export default function CoverImageEditor(props: AnyObject) {
    return (
        <>
            <h3>Cover Image</h3>
            <UploadButton
                appearance={{
                    button: "border-2 border-teal bg-teal rounded-[10px] hover:bg-white hover:text-teal",
                    container: "block w-fit mt-[7px]",
                    allowedContent: "text-center",
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
