/* eslint-disable react/jsx-key */
import TableGraphPreview from "@/components/table_graph/preview/tableGraph";
import ImageContainerPreview from "../image_container/preview/imageContainer";
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
                switch (section.type) {
                    case "image":
                        return <ImageContainerPreview {...containerProps} />;
                    case "tableGraph":
                        return <TableGraphPreview {...containerProps} />;
                    default:
                        return <TextContainerPreview {...containerProps} />;
                }
            })}
        </div>
    );
}
