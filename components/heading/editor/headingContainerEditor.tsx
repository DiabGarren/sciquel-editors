import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function HeadingContainerEditor(props: any) {
    var toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };

    return (
        <>
            <h3>Heading</h3>
            <ReactQuill
                className="textEditor"
                theme="snow"
                modules={modules}
                value={props.heading}
                onChange={(event) => props.setHeading(event)}
            />
            <h3>Subheading</h3>
            <ReactQuill
                className="textEditor"
                theme="snow"
                modules={modules}
                value={props.subheading}
                onChange={(event) => props.setSubheading(event)}
            />
        </>
    );
}
