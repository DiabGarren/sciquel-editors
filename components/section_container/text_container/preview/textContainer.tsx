import parse from "html-react-parser";

export default function TextContainerPreview(props: any) {
    console.log(props.text);

    return <div className="text-container">{parse(props.text)}</div>;
}
