import parse from "html-react-parser";

export default function TextContainerPreview(props: any) {
    return (
        <div className="text-container break-words">{parse(props.section[props.index].text)}</div>
    );
}
