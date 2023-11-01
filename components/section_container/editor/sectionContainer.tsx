/* eslint-disable react/jsx-key */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import TextContainerEditor from "../text_container/editor/textContainer";
import ImageContainerEditor from "../image_container/editor/imageContainer";

export default function SectionContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-lr p-[7px]">
            {props.section.map((section: any, index: number) => {
                const containerProps = {
                    section: props.section,
                    setSection: props.setSection,
                    index: index,
                };
                if (section.type === "text" || section.type === "sectionHeader")
                    return <TextContainerEditor {...containerProps} />;

                if (section.type === "image") return <ImageContainerEditor {...containerProps} />;
            })}
            <Dropdown>
                <DropdownTrigger>
                    <Button
                        variant="solid"
                        color="primary">
                        +
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    onAction={(event) => {
                        props.setSection([
                            ...props.section,
                            event === "sectionHeader"
                                ? { type: event, text: "" }
                                : event === "image"
                                ? {
                                      type: event,
                                      imageUrl: "",
                                      width: 0,
                                      height: 0,
                                      altText: "",
                                      caption: "",
                                      credit: "",
                                      pos: "center",
                                  }
                                : event === "text"
                                ? { type: event, text: "" }
                                : { type: event, modules: [{}, {}] },
                        ]);
                    }}
                    items={[
                        { name: "Section Header", key: "sectionHeader" },
                        { name: "Text", key: "text" },
                        { name: "Image", key: "image" },
                        { name: "Text/Image", key: "modular" },
                    ]}>
                    {(item: any) => <DropdownItem key={item.key}>{item.name}</DropdownItem>}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}
