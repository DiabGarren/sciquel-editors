import HeadingContainerPreview from "@/components/heading/preview/headingContainer";
import { ImageProps } from "@/utils/types";

export default function CoverImagePreview(props: ImageProps) {
    return (
        <div
            className="cover-image mx-[auto] h-[500px] bg-center bg-cover bg-no-repeat flex flex-row items-end"
            style={{
                backgroundImage: props.finalImage
                    ? `url('/images/${props.finalImage.name}')`
                    : "url('/images/bobtail.png')",
            }}
        >
            <div className="ml-[25px] mb-[15px] text-white">
                <HeadingContainerPreview {...props.headingProps} />
            </div>
        </div>
    );
}
