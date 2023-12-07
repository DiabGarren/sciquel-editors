import HeadingContainerPreview from "@/components/heading/preview/headingContainer";

export default function CoverImagePreview(props: any) {
    return (
        <div
            className="mx-auto h-[250px] md:h-[450px] lr:w-[80%] lr:max-w-[900px] bg-center bg-cover bg-no-repeat flex flex-row items-end"
            style={{
                backgroundImage: props.finalImage
                    ? `url('${props.finalImage}')`
                    : "url('/images/bobtail.png')",
            }}>
            <div className="ml-[25px] mb-[15px] text-white">
                <HeadingContainerPreview {...props.headingProps} />
            </div>
        </div>
    );
}
