import parse from "html-react-parser";

export default function TextContainerPreview(props: any) {
    if (props.section[props.index].type === "sectionHeader") {
        return (
            <h3 className="text-container break-words">{parse(props.section[props.index].text)}</h3>
        );
    } else {
        return (
            <div className="text-container break-words">
                {parse(props.section[props.index].text)}
            </div>
        );
    }
}
