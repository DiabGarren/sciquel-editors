/* eslint-disable react/jsx-key */
import ImageContainerPreview from "../image_container/editor/preview/imageContainer";
import TextContainerPreview from "../text_container/preview/textContainer";

export default function SectionContainerPreview(props: any) {
    return (
        <div>
            {props.section.map((section: any, index: number) => {
                const containerProps = {
                    section: props.section,
                    setSection: props.setSection,
                    index: index,
                };
                if (section.type === "text") return <TextContainerPreview {...containerProps} />;
                if (section.type === "image") return <ImageContainerPreview {...containerProps} />;
            })}
        </div>
    );
}
