import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

export default function HeadingContainerEditor(props: any) {
    const toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };

    return (
        <>
            <h3>Heading</h3>
            <ReactQuill
                className="text-editor"
                theme="snow"
                modules={modules}
                value={props.heading}
                onChange={props.setHeading}
            />
            <h3>Subheading</h3>
            <ReactQuill
                className="text-editor"
                theme="snow"
                modules={modules}
                value={props.subheading}
                onChange={props.setSubheading}
            />
        </>
    );
}
