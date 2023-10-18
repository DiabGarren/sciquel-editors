import parse from "html-react-parser";
import { alegreya_sans_sc } from "@/utils/fonts";

export default function HeadingContainerPreview(props: any) {
    const style = {
        textShadow: "0 0 5px black, 0 0 15px black",
        fontFamily: alegreya_sans_sc.style.fontFamily,
        fontWeight: "700",
    };
    let heading;
    let subheading;

    if (props.heading === "" || props.heading === "<p><br></p>") {
        heading = "Heading";
    } else {
        heading = parse(props.heading);
    }
    if (props.subheading === "" || props.subheading === "<p><br></p>") {
        subheading = "Subheading";
    } else {
        subheading = parse(props.subheading);
    }

    return (
        <>
            <h1
                className="text-[4rem] h-[70px]"
                style={style}>
                {heading}
            </h1>
            <h2
                className="text-[2.25rem]"
                style={style}>
                {subheading}
            </h2>
        </>
    );
}
