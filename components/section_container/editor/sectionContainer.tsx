/* eslint-disable react/jsx-key */
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import TextContainerEditor from "../text_container/editor/textContainer";
import ImageContainerEditor from "../image_container/editor/imageContainer";
import TableGraphEditor from "@/components/table_graph/editor/tableGraph";
import Popup from "reactjs-popup";

const sectionItems = [
    { name: "Section Header", key: "sectionHeader" },
    { name: "Text", key: "text" },
    { name: "Image", key: "image" },
    { name: "Table/graph", key: "tableGraph" },
];
export default function SectionContainerEditor(props: any) {
    return (
        <div className="border border-grey-light-1 rounded-lr p-[7px]">
            <div className="border border-grey-light-1 rounded-box p-[15px] mb-[10px]">
                <h3>Article content</h3>
            </div>
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
            <div className="md:w-[65px] mx-auto">
                <Popup
                    trigger={
                        <Button
                            className="w-[100%] text-[1.25rem] md:text-[1.1rem]"
                            color="primary">
                            +
                        </Button>
                    }
                    position={"bottom center"}>
                    <div className="popup">
    {sectionItems.map((type: any, index: number) => {
        return (
            <div
                className="popup-item"
                onClick={() => {
                    let section = {}; 
                    if (type.key === "image") {
                        section = {
                            type: type.key,
                            imageUrl: "",
                            width: 0,
                            height: 0,
                            altText: "",
                            caption: "",
                            credit: "",
                            pos: "center",
                            wrap: "true",
                        };
                    } else if (type.key === "tableGraph") {
                        section = {
                            type: type.key,
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
                                references: [
                                    {
                                        label: "Ref 1",
                                        y: 0,
                                        x: null,
                                        color: "#109191",
                                    },
                                ],
                                display: { table: "true", graph: "true" },
                            },
                        };
                    } else {
                        section = { type: type.key, text: "" };
                    }

                    console.log(section);

                    props.setSection([...props.section, section]);
                }}
            >
                <p className="inline pl-[4px]">{type.name}</p>
            </div>
        );
    })}
</div>
    
</Popup>
</div>
</div>
);
}
