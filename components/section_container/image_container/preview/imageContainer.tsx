import Image from "next/image";
import parse from "html-react-parser";

export default function ImageContainerPreview(props: any) {
    const image = (
        <Image
            className="mx-auto"
            src={props.section[props.index].imageUrl || "/images/bobtail.png"}
            alt={props.section[props.index].altText || "Image alt text"}
            width={650}
            height={props.section[props.index].height}
        />
    );
    const caption = parse(props.section[props.index].caption) || "Caption";
    const credit = props.section[props.index].credit || "Image credit";

    switch (props.section[props.index].pos) {
        case "left":
            if (props.section[props.index].wrap === "true") {
                return (
                    <div className="w-[500px] mx-auto">
                        <div
                            className="float float-left mr-[5px] align-center"
                            style={{ width: `${props.section[props.index].width || 300}px` }}>
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            } else {
                return (
                    <div className="grid grid-cols-[407px_1fr] w-[650px] items-center">
                        <div className="w-[400px]">
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            }
        case "center":
            return (
                <div className="w-[650px] mx-auto">
                    {image}
                    <p className="image-credit break-words mr-[7px] inline text-[13px]">
                        {caption}
                    </p>
                    <p className="break-words mx-auto text-grey inline text-[13px]">{credit}</p>
                </div>
            );
        case "right": {
            if (props.section[props.index].wrap === "true") {
                return (
                    <div className="w-[500px] mx-auto">
                        <div
                            className="float float-right ml-[5px] align-center"
                            style={{ width: `${props.section[props.index].width || 300}px` }}>
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            } else {
                return (
                    <div className="grid grid-cols-[250px_250px] w-[500px] mx-auto items-center">
                        <p className="break-words">{caption}</p>
                        <div className="w-[400px]">
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                    </div>
                );
            }
        }
    }
}
