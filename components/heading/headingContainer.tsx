import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import parse from "html-react-parser";
import { alegreya_sans_sc } from "@/utils/fonts";

export default function HeadingContainer(props: any) {
    var toolbarOptions = ["bold", "italic", "underline", "strike"];
    const modules = { toolbar: toolbarOptions };
    if (props.preview) {
        const style = {
            textShadow: "0 0 5px black, 0 0 15px black",
            fontFamily: alegreya_sans_sc.style.fontFamily,
            fontWeight: "700",
        };
        let heading;
        let subheading;

        if (props.heading === "") {
            heading = "Heading";
        } else {
            heading = parse(props.heading);
        }
        if (props.subheading === "") {
            subheading = "Subheading";
        } else {
            subheading = parse(props.subheading);
        }

        return (
            <div className="absolute w-[100%] top-[350px] text-white">
                <div className="w-[850px] mx-[auto]">
                    <h1 className="text-[4rem] h-[70px]" style={style}>
                        {heading}
                    </h1>
                    <h2 className="text-[2.25rem]" style={style}>
                        {subheading}
                    </h2>
                </div>
            </div>
        );
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
