import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";

export default function HeadingContainer(props: any) {
    var toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };
    if (props.preview) {
        const  style={textShadow: "0 0 5px black, 0 0 15px black"};
        let heading;
        let subheading;

        if (props.heading === "") {
            heading = <h1 style={style}>Heading</h1>;
        } else {
            heading = <h1 style={style}>{parse(props.heading)}</h1>;
        }
        if (props.subheading === "") {
            subheading = <h2 className="mt-[15px]" style={style}>Subheading</h2>;
        } else {
            subheading = <h2 className="mt-[15px]" style={style}>{parse(props.subheading)}</h2>;
        }

        return (
            <div className="absolute left-[150px] top-[500px] text-white">
                {heading}
                {subheading}
            </div>
        )
    } else {
        return (
            <div className="w-[750px] mx-[auto]  my-[50px]">
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
            </div>
        );
    }
}
