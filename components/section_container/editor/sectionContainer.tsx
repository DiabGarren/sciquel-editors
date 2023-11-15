/* eslint-disable react/jsx-key */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import TextContainerEditor from "../text_container/editor/textContainer";
import ImageContainerEditor from "../image_container/editor/imageContainer";
import TableGraphEditor from "@/components/table_graph/editor/tableGraph";

export default function SectionContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-lr p-[7px]">
            {props.section.map((section: any, index: number) => {
                const containerProps = {
                    section: props.section,
                    setSection: props.setSection,
                    index: index,
                };
                switch (section.type) {
                    case "image":
                        return <ImageContainerEditor {...containerProps} />;
                    case "tableGraph":
                        return <TableGraphEditor {...containerProps} />;
                    default:
                        return <TextContainerEditor {...containerProps} />;
                }
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
                            let section = {};
                            switch (event) {
                                case "image":
                                    section = {
                                        type: event,
                                        imageUrl: "",
                                        width: 0,
                                        height: 0,
                                        altText: "",
                                        caption: "",
                                        credit: "",
                                        pos: "center",
                                        wrap: "true",
                                    };
                                    break;
                                case "tableGraph":
                                    section = {
                                        type: event,
                                        table: {
                                            type: "Bar",
                                            headings: {
                                                axis: { x: "X", y: "Y" },
                                                rows: ["Row 1", "Row 2", "Row 3"],
                                                cols: ["Col 1", "Col 2"],
                                            },
                                            colors: ["#109191", "#57adde"],
                                            data: [
                                                [0, 0],
                                                [0, 0],
                                                [0, 0],
                                            ],
                                            display: { table: "true", graph: "true" },
                                        },
                                    };
                                    break;
                                default:
                                    section = { type: event, text: "" };
                                    break;
                            }
                            props.setSection([...props.section, section]);
                        }}
                        items={[
                            { name: "Section Header", key: "sectionHeader" },
                            { name: "Text", key: "text" },
                            { name: "Image", key: "image" },
                            { name: "Table/graph", key: "tableGraph" },
                        ]}>
                        {(item: any) => <DropdownItem key={item.key}>{item.name}</DropdownItem>}
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}
