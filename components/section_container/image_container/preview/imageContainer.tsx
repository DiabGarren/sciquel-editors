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
                    <div className="my-[10px] md:w-[500px] lr:w-[405px] xl:w-[650px] mx-auto">
                        <div
                            className="float float-left mr-[5px] mt-[5px] align-center w-[50%]"
                            // style={{ width: `${props.section[props.index].width || 300}px` }}
                        >
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            } else {
                return (
                    <div className="grid grid-cols-2 md:w-[500px] lr:w-[405px] xl:w-[650px] items-center my-[10px] mx-auto">
                        <div className="w-[90%] md:w-[95%]">
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            }
        case "center":
            return (
                <div className="my-[35px] md:w-[650px] lr:w-[405px] xl:w-[650px] mx-auto">
                    {image}
                    <p
                        className="image-credit break-words mr-[7px] inline text-[13px]"
                        style={{ lineHeight: "3px" }}>
                        {caption}
                    </p>
                    <p className="break-words text-grey inline text-[13px]">{credit}</p>
                </div>
            );
        case "right": {
            if (props.section[props.index].wrap === "true") {
                return (
                    <div className="md:w-[500px] lr:w-[405px] xl:w-[650px] my-[10px] mx-auto">
                        <div
                            className="float float-right ml-[5px] mt-[5px] align-center w-[50%]"
                            // style={{ width: `${props.section[props.index].width || 300}px` }}
                        >
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                        <p className="break-words">{caption}</p>
                    </div>
                );
            } else {
                return (
                    <div className="grid grid-cols-2 md:w-[500px] lr:w-[405px] xl:w-[650px] items-center my-[10px] mx-auto">
                        <p className="break-words">{caption}</p>
                        <div className="w-[90%] md:w-[95%]">
                            {image}
                            <p className="break-words text-grey text-[12px]">{credit}</p>
                        </div>
                    </div>
                );
            }
        }
    }
}
