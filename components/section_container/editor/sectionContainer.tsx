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
            <div className="w-[60px] mx-auto">
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
                                          wrap: "true",
                                      }
                                    : { type: event, text: "" },
                            ]);
                        }}
                        items={[
                            { name: "Section Header", key: "sectionHeader" },
                            { name: "Text", key: "text" },
                            { name: "Image", key: "image" },
                        ]}>
                        {(item: any) => <DropdownItem key={item.key}>{item.name}</DropdownItem>}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}
