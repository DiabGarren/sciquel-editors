import Image from "next/image";

export default function ImageContainerPreview(props: any) {
    const image = (
        <Image
            className="mx-auto"
            src={props.section[props.index].imageUrl || "/images/bobtail.png"}
            alt={props.section[props.index].altText || "Image alt text"}
            width={props.section[props.index].width || 800}
            height={props.section[props.index].height}
        />
    );
    const caption = props.section[props.index].caption || "Caption";
    const credit = props.section[props.index].credit || "Image credit";

    switch (props.section[props.index].pos) {
        case "left":
            return (
                <div className="grid grid-cols-[2fr_1fr] w-[650px] align-center">
                    <div className="mr-[7px] align-center">
                        {image}
                        <p className="break-words mx-auto text-grey text-[12px]">{credit}</p>
                    </div>
                    <p className="break-words mr-[15px] inline">{caption}</p>
                </div>
            );
        case "center":
            return (
                <>
                    {image}
                    <p className="break-words mr-[7px] inline text-[12px]">{caption}</p>
                    <p className="break-words mx-auto text-grey inline text-[12px]">{credit}</p>
                </>
            );
        case "right": {
            return (
                <div className="grid grid-cols-[1fr_2fr]">
                    <p className="break-words mr-[15px] inline">{caption}</p>
                    <div>
                        {image}
                        <p className="break-words mx-auto text-grey text-[12px]">{credit}</p>
                    </div>
                </div>
            );
        }
    }
}
