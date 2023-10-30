import Image from "next/image";

export default function ImageContainerPreview(props: any) {
    return (
        <>
            <Image
                src={props.section[props.index].imageUrl}
                alt={props.section[props.index].altText}
                width={props.section[props.index].width}
                height={props.section[props.index].height}
            />
            <p className="break-words">
                <i>{props.section[props.index].caption}</i>
            </p>
        </>
    );
}
