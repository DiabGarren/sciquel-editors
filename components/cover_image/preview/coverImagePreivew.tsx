import HeadingContainerPreview from "@/components/heading/preview/headingContainerPreview";
import { ImageProps } from "@/utils/types";

export default function CoverImagePreview(props: ImageProps) {
    let imageUrl = "url('/images/bobtail.png')";
    if (props.finalImage) {
        imageUrl = `url('/images/${props.finalImage.name}')`;
    }
    return (
        <div
            className="w-[1200px] mx-[auto] h-[500px] bg-center bg-cover bg-no-repeat flex flex-row items-end"
            style={{ backgroundImage: imageUrl, borderRadius: "0 0 5px 5px" }}
        >
            <div className="ml-[25px] mb-[15px] text-white">
                <HeadingContainerPreview {...props.headingProps} />
            </div>
        </div>
    );
}
