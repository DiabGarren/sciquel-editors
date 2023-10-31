import Image from "next/image";

export default function ImageContainerPreview(props: any) {
    return (
        <>
            <Image
                className="mx-auto"
                src={props.section[props.index].imageUrl}
                alt={props.section[props.index].altText}
                width={
                    props.section[props.index].width == 0 ? 800 : props.section[props.index].width
                }
                height={props.section[props.index].height}
            />
            <p className="break-words mr-[15px] inline">{props.section[props.index].caption}</p>
            <p className="break-words mx-auto text-grey inline">
                {props.section[props.index].credit}
            </p>
        </>
    );
}
