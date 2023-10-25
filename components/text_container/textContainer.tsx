import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function TextContainer() {
    const toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };
    return (
        <ReactQuill
            className="textEditor textContainer"
            theme="snow"
            modules={modules}
        />
    );
}
