/* eslint-disable react/jsx-key */
import { TrashIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup, Select, SelectItem } from "@nextui-org/react";
import { ChromePicker } from "react-color";
import Popup from "reactjs-popup";

const graphTypes = [{ name: "Bar" }, { name: "Line" }, { name: "Area" }, { name: "Pie" }];
export default function TableGraphEditor(props: any) {
    const renderTable = (section: any) => {
        switch (section.table.type) {
            case "Bar":
            case "Line":
            case "Area":
                return (
                    <>
                        <div className="mb-[7px]">
                            <h3>Axis headings</h3>
                            <div className="grid grid-cols-2 gap-[5px]">
                                <div className="grid grid-cols-[60px_1fr]">
                                    <h4>X-Axis</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%]"
                                        type="text"
                                        value={section.table.headings.axis.x}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.table.headings.axis.x =
                                                            event.target.value;
                                                        return {
                                                            type: section.type,
                                                            table: section.table,
                                                        };
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                </div>
                                <div className="grid grid-cols-[60px_1fr]">
                                    <h4>Y-Axis</h4>
                                    <input
                                        className="border border-grey-light rounded w-[100%]"
                                        type="text"
                                        value={section.table.headings.axis.y}
                                        onChange={(event) => {
                                            props.setSection(
                                                props.section.map((section: any, index: number) => {
                                                    if (index === props.index) {
                                                        section.table.headings.axis.y =
                                                            event.target.value;
                                                        return {
                                                            type: section.type,
                                                            table: section.table,
                                                        };
                                                    }
                                                    return section;
                                                })
                                            );
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <h3>Data</h3>
                        <div className="table-graph border border-grey-light-1 rounded-box p-[2px] mx-auto w-[100%] max-w-[268px] xsm:max-w-[323px] sm:max-w-[373px] md:max-w-none overflow-x-auto">
                            <div className="flex mb-[2px]">
                                <div className="w-[75px] min-w-[75px] mr-[5px]"></div>
                                {section.table.headings.cols.map(
                                    (heading: string, colIndex: number) => {
                                        return (
                                            <input
                                                className="border border-grey-light rounded w-[75px]"
                                                type="text"
                                                value={heading}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    const cols =
                                                                        section.table.headings.cols.map(
                                                                            (
                                                                                heading: string,
                                                                                cIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    cIndex ===
                                                                                    colIndex
                                                                                ) {
                                                                                    return event
                                                                                        .target
                                                                                        .value;
                                                                                }
                                                                                return heading;
                                                                            }
                                                                        );

                                                                    section.table.headings.cols =
                                                                        cols;
                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    }
                                )}
                            </div>
                            <div className="flex mb-[5px]">
                                <div className="w-[75px] min-w-[75px] mr-[5px]"></div>
                                {section.table.colors.map((color: string, colorIndex: number) => {
                                    return (
                                        <Popup
                                            trigger={
                                                <button
                                                    className="rounded w-[75px] min-w-[75px] h-[26px] border-none"
                                                    style={{
                                                        backgroundColor: color,
                                                    }}></button>
                                            }
                                            position="center center">
                                            <ChromePicker
                                                color={color}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    const colors =
                                                                        section.table.colors.map(
                                                                            (
                                                                                color: string,
                                                                                cIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    cIndex ===
                                                                                    colorIndex
                                                                                ) {
                                                                                    return event.hex;
                                                                                } else return color;
                                                                            }
                                                                        );
                                                                    section.table.colors = colors;
                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        </Popup>
                                    );
                                })}
                            </div>
                            {section.table.data.map((row: any, rowIndex: number) => {
                                return (
                                    <div className="flex">
                                        <input
                                            className="border border-grey-light rounded w-[75px] mr-[5px]"
                                            type="text"
                                            value={section.table.headings.rows[rowIndex]}
                                            onChange={(event) => {
                                                props.setSection(
                                                    props.section.map(
                                                        (section: any, index: number) => {
                                                            if (index === props.index) {
                                                                const rows =
                                                                    section.table.headings.rows.map(
                                                                        (
                                                                            heading: string,
                                                                            rIndex: number
                                                                        ) => {
                                                                            if (
                                                                                rIndex === rowIndex
                                                                            ) {
                                                                                return event.target
                                                                                    .value;
                                                                            }
                                                                            return heading;
                                                                        }
                                                                    );

                                                                section.table.headings.rows = rows;
                                                                return {
                                                                    type: section.type,
                                                                    table: section.table,
                                                                };
                                                            }
                                                            return section;
                                                        }
                                                    )
                                                );
                                            }}
                                        />
                                        {row.map((column: any, colIndex: number) => {
                                            return (
                                                <input
                                                    className="border border-grey-light rounded w-[75px]"
                                                    type="number"
                                                    value={
                                                        section.table.data[rowIndex][colIndex] === 0
                                                            ? ""
                                                            : section.table.data[rowIndex][colIndex]
                                                    }
                                                    onChange={(event) => {
                                                        props.setSection(
                                                            props.section.map(
                                                                (sect: any, sectIndex: number) => {
                                                                    if (sectIndex === props.index) {
                                                                        sect.table.data[rowIndex][
                                                                            colIndex
                                                                        ] = event.target.value;

                                                                        return {
                                                                            type: sect.type,
                                                                            table: sect.table,
                                                                        };
                                                                    }
                                                                    return sect;
                                                                }
                                                            )
                                                        );
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                        <div>
                            <h3>Reference line</h3>
                            {section.table.references.map((ref: any, refIndex: number) => {
                                return (
                                    <div className="flex flex-col">
                                        <div className="flex">
                                            <h4 className="w-[60px] mr-[5px]">Y value</h4>
                                            <input
                                                type="number"
                                                className="border border-grey-light rounded w-[75px]"
                                                value={ref.y}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    section.table.references =
                                                                        section.table.references.map(
                                                                            (
                                                                                ref: any,
                                                                                rIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    rIndex ===
                                                                                    refIndex
                                                                                ) {
                                                                                    ref.y =
                                                                                        event.target.value;
                                                                                    return ref;
                                                                                }
                                                                                return ref;
                                                                            }
                                                                        );

                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="flex">
                                            <h4 className="w-[60px] mr-[5px]">Label</h4>
                                            <input
                                                type="text"
                                                className="border border-grey-light rounded w-[75px]"
                                                value={ref.label}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    section.table.references =
                                                                        section.table.references.map(
                                                                            (
                                                                                ref: any,
                                                                                rIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    rIndex ===
                                                                                    refIndex
                                                                                ) {
                                                                                    ref.label =
                                                                                        event.target.value;
                                                                                    return ref;
                                                                                }
                                                                                return ref;
                                                                            }
                                                                        );

                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        </div>
                                        <div className="flex">
                                            <h4 className="w-[60px] mr-[5px]">Color</h4>
                                            <Popup
                                                trigger={
                                                    <button
                                                        className="rounded w-[75px] h-[26px] border-none"
                                                        style={{
                                                            backgroundColor: ref.color,
                                                        }}></button>
                                                }
                                                position="top left">
                                                <ChromePicker
                                                    color={ref.color}
                                                    onChange={(event) => {
                                                        props.setSection(
                                                            props.section.map(
                                                                (section: any, index: number) => {
                                                                    if (index === props.index) {
                                                                        const references =
                                                                            section.table.references.map(
                                                                                (
                                                                                    reference: any,
                                                                                    rIndex: number
                                                                                ) => {
                                                                                    if (
                                                                                        rIndex ===
                                                                                        refIndex
                                                                                    ) {
                                                                                        return {
                                                                                            y: reference.y,
                                                                                            x: reference.x,
                                                                                            color: event.hex,
                                                                                        };
                                                                                    }
                                                                                    return reference;
                                                                                }
                                                                            );
                                                                        section.table.references =
                                                                            references;
                                                                        return {
                                                                            type: section.type,
                                                                            table: section.table,
                                                                        };
                                                                    }
                                                                    return section;
                                                                }
                                                            )
                                                        );
                                                    }}
                                                />
                                            </Popup>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                );
            case "Pie":
                return (
                    <>
                        <h3>Data</h3>
                        <div className="table-graph border border-grey-light-1 rounded-box p-[2px] mx-auto max-w-[268px] xsm:max-w-[323px] sm:max-w-[373px] md:max-w-none overflow-x-auto">
                            <div className="flex mb-[2px]">
                                {section.table.headings.cols.map(
                                    (heading: string, colIndex: number) => {
                                        return (
                                            <input
                                                className="border border-grey-light rounded w-[75px]"
                                                type="text"
                                                value={heading}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    const cols =
                                                                        section.table.headings.cols.map(
                                                                            (
                                                                                heading: string,
                                                                                cIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    cIndex ===
                                                                                    colIndex
                                                                                ) {
                                                                                    return event
                                                                                        .target
                                                                                        .value;
                                                                                }
                                                                                return heading;
                                                                            }
                                                                        );

                                                                    section.table.headings.cols =
                                                                        cols;
                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        );
                                    }
                                )}
                            </div>
                            <div className="flex mb-[5px]">
                                {section.table.colors.map((color: string, colorIndex: number) => {
                                    return (
                                        <Popup
                                            trigger={
                                                <button
                                                    className="rounded w-[75px] min-w-[75px] h-[26px] border-none"
                                                    style={{
                                                        backgroundColor: color,
                                                    }}></button>
                                            }
                                            position="center center">
                                            <ChromePicker
                                                color={color}
                                                onChange={(event) => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, index: number) => {
                                                                if (index === props.index) {
                                                                    const colors =
                                                                        section.table.colors.map(
                                                                            (
                                                                                color: string,
                                                                                cIndex: number
                                                                            ) => {
                                                                                if (
                                                                                    cIndex ===
                                                                                    colorIndex
                                                                                ) {
                                                                                    return event.hex;
                                                                                } else return color;
                                                                            }
                                                                        );
                                                                    section.table.colors = colors;
                                                                    return {
                                                                        type: section.type,
                                                                        table: section.table,
                                                                    };
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}
                                            />
                                        </Popup>
                                    );
                                })}
                            </div>
                            {section.table.data.map((row: any, rowIndex: number) => {
                                return (
                                    <div className="flex">
                                        {row.map((column: any, colIndex: number) => {
                                            return (
                                                <input
                                                    className="border border-grey-light rounded w-[75px]"
                                                    type="number"
                                                    value={
                                                        section.table.data[rowIndex][colIndex] === 0
                                                            ? ""
                                                            : section.table.data[rowIndex][colIndex]
                                                    }
                                                    onChange={(event) => {
                                                        props.setSection(
                                                            props.section.map(
                                                                (sect: any, sectIndex: number) => {
                                                                    if (sectIndex === props.index) {
                                                                        sect.table.data[rowIndex][
                                                                            colIndex
                                                                        ] = event.target.value;

                                                                        return {
                                                                            type: sect.type,
                                                                            table: sect.table,
                                                                        };
                                                                    }
                                                                    return sect;
                                                                }
                                                            )
                                                        );
                                                    }}
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    </>
                );
        }
    };

    return (
        <div className="border border-grey-light-1 rounded-box p-[7px] mb-[7px]">
            {props.section.map((section: any, index: number) => {
                if (index === props.index) {
                    return (
                        <>
                            <div className="flex">
                                <h3>Table and Graph</h3>
                                <TrashIcon
                                    className="trash-icon ml-auto md:ml-[15px]"
                                    onClick={() => {
                                        const sections: any[] = [];
                                        props.section.forEach((section: any, index: number) => {
                                            if (index !== props.index) sections.push(section);
                                        });
                                        props.setSection(sections);
                                    }}
                                />
                            </div>
                            <Popup
                                trigger={
                                    <div className="popup-select md:w-[250px]">
                                        <p className="text-[16px]">Graph Type</p>
                                        <div className="flex">
                                            <p className="text-teal">{section.table.type}</p>
                                            <input
                                                type="checkbox"
                                                className="hidden first:[&~svg_path]:checked:hidden last:[&~svg_path]:checked:inline"
                                            />
                                            <svg
                                                className="ml-auto mr-[5px]"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="15"
                                                height="9"
                                                viewBox="0 0 14 8"
                                                fill="none">
                                                <path
                                                    className=""
                                                    d="M1 1L7 7L13 1"
                                                    stroke="#109191"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                />
                                                <path
                                                    className="hidden"
                                                    d="M13 7L7 1L1 7"
                                                    stroke="#109191"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                }
                                position="bottom right"
                                closeOnDocumentClick={false}
                                closeOnEscape={false}
                                onOpen={(event: any) => {
                                    let parent = event.target;
                                    if (parent.classList.contains("popup-select")) {
                                        parent.childNodes[1].childNodes[1].checked = true;
                                    } else {
                                        parent = event.target.parentNode;
                                        if (parent.classList.contains("popup-select")) {
                                            parent.childNodes[1].childNodes[1].checked = true;
                                        } else {
                                            parent = event.target.parentNode.parentNode;
                                            if (parent.classList.contains("popup-select")) {
                                                parent.childNodes[1].childNodes[1].checked = true;
                                            } else {
                                                parent =
                                                    event.target.parentNode.parentNode.parentNode;
                                                if (parent.classList.contains("popup-select")) {
                                                    parent.childNodes[1].childNodes[1].checked =
                                                        true;
                                                }
                                            }
                                        }
                                    }
                                }}
                                onClose={(event: any) => {
                                    let parent = event.target;
                                    if (parent.classList.contains("popup-select")) {
                                        parent.childNodes[1].childNodes[1].checked = false;
                                    } else {
                                        parent = event.target.parentNode;
                                        if (parent.classList.contains("popup-select")) {
                                            parent.childNodes[1].childNodes[1].checked = false;
                                        } else {
                                            parent = event.target.parentNode.parentNode;
                                            if (parent.classList.contains("popup-select")) {
                                                parent.childNodes[1].childNodes[1].checked = false;
                                            } else {
                                                parent =
                                                    event.target.parentNode.parentNode.parentNode;
                                                if (parent.classList.contains("popup-select")) {
                                                    parent.childNodes[1].childNodes[1].checked =
                                                        false;
                                                }
                                            }
                                        }
                                    }
                                }}>
                                <div className="popup">
                                    {graphTypes.map((type: any) => {
                                        return (
                                            <div
                                                className="popup-item"
                                                onClick={() => {
                                                    props.setSection(
                                                        props.section.map(
                                                            (section: any, secIndex: number) => {
                                                                if (secIndex === index) {
                                                                    switch (type.name) {
                                                                        case "Bar":
                                                                            if (
                                                                                section.table
                                                                                    .type !==
                                                                                    "Line" &&
                                                                                section.table
                                                                                    .type !== "Area"
                                                                            ) {
                                                                                section.table.headings =
                                                                                    {
                                                                                        axis: {
                                                                                            x: "X",
                                                                                            y: "Y",
                                                                                        },
                                                                                        rows: [
                                                                                            "Row 1",
                                                                                            "Row 2",
                                                                                            "Row 3",
                                                                                        ],
                                                                                        cols: [
                                                                                            "Col 1",
                                                                                            "Col 2",
                                                                                        ],
                                                                                    };
                                                                                section.table.colors =
                                                                                    [
                                                                                        "#109191",
                                                                                        "#57adde",
                                                                                    ];
                                                                                section.table.data =
                                                                                    [
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                    ];
                                                                                section.table.references =
                                                                                    [
                                                                                        {
                                                                                            label: "Ref 1",
                                                                                            y: 0,
                                                                                            x: null,
                                                                                            color: "#109191",
                                                                                        },
                                                                                    ];
                                                                            }
                                                                            break;
                                                                        case "Line":
                                                                            if (
                                                                                section.table
                                                                                    .type !==
                                                                                    "Bar" &&
                                                                                section.table
                                                                                    .type !== "Area"
                                                                            ) {
                                                                                section.table.headings =
                                                                                    {
                                                                                        axis: {
                                                                                            x: "X",
                                                                                            y: "Y",
                                                                                        },
                                                                                        rows: [
                                                                                            "Row 1",
                                                                                            "Row 2",
                                                                                            "Row 3",
                                                                                        ],
                                                                                        cols: [
                                                                                            "Line 1",
                                                                                            "Line 2",
                                                                                        ],
                                                                                    };
                                                                                section.table.colors =
                                                                                    [
                                                                                        "#109191",
                                                                                        "#57adde",
                                                                                    ];
                                                                                section.table.data =
                                                                                    [
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                    ];
                                                                                section.table.references =
                                                                                    [
                                                                                        {
                                                                                            label: "Ref 1",
                                                                                            y: 0,
                                                                                            x: null,
                                                                                            color: "#109191",
                                                                                        },
                                                                                    ];
                                                                            }
                                                                            break;
                                                                        case "Area":
                                                                            if (
                                                                                section.table
                                                                                    .type !==
                                                                                    "Bar" &&
                                                                                section.table
                                                                                    .type !== "Line"
                                                                            ) {
                                                                                section.table.headings =
                                                                                    {
                                                                                        axis: {
                                                                                            x: "X",
                                                                                            y: "Y",
                                                                                        },
                                                                                        rows: [
                                                                                            "Row 1",
                                                                                            "Row 2",
                                                                                            "Row 3",
                                                                                        ],
                                                                                        cols: [
                                                                                            "Line 1",
                                                                                            "Line 2",
                                                                                        ],
                                                                                    };
                                                                                section.table.colors =
                                                                                    [
                                                                                        "#109191",
                                                                                        "#57adde",
                                                                                    ];
                                                                                section.table.data =
                                                                                    [
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                        [0, 0],
                                                                                    ];
                                                                                section.table.references =
                                                                                    [
                                                                                        {
                                                                                            label: "Ref 1",
                                                                                            y: 0,
                                                                                            x: null,
                                                                                            color: "#109191",
                                                                                        },
                                                                                    ];
                                                                            }
                                                                            break;
                                                                        case "Pie":
                                                                            section.table.headings =
                                                                                {
                                                                                    axis: {
                                                                                        x: "X",
                                                                                        y: "Y",
                                                                                    },
                                                                                    rows: [],
                                                                                    cols: [
                                                                                        "Col 1",
                                                                                        "Col 2",
                                                                                    ],
                                                                                };
                                                                            section.table.colors = [
                                                                                "#109191",
                                                                                "#57adde",
                                                                            ];
                                                                            section.table.data = [
                                                                                [0, 0],
                                                                            ];
                                                                            section.table.references =
                                                                                [
                                                                                    {
                                                                                        label: "Ref 1",
                                                                                        y: 0,
                                                                                        x: null,
                                                                                        color: "#109191",
                                                                                    },
                                                                                ];
                                                                    }
                                                                    section.table.type = type.name;
                                                                }
                                                                return section;
                                                            }
                                                        )
                                                    );
                                                }}>
                                                {type.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </Popup>
                            <h3>Visibility</h3>
                            <div className="grid grid-cols-2 mb-[15px]">
                                <RadioGroup
                                    label="Display Table"
                                    orientation="horizontal"
                                    value={section.table.display.table}
                                    onValueChange={(event) => {
                                        props.setSection(
                                            props.section.map((section: any, index: number) => {
                                                if (index === props.index) {
                                                    section.table.display.table = event;
                                                    return {
                                                        type: section.type,
                                                        table: section.table,
                                                    };
                                                }
                                                return section;
                                            })
                                        );
                                    }}>
                                    <Radio value="true">True</Radio>
                                    <Radio value="false">False</Radio>
                                </RadioGroup>
                                <RadioGroup
                                    label="Display Graph"
                                    orientation="horizontal"
                                    value={section.table.display.graph}
                                    onValueChange={(event) => {
                                        props.setSection(
                                            props.section.map((section: any, index: number) => {
                                                if (index === props.index) {
                                                    section.table.display.graph = event;
                                                    return {
                                                        type: section.type,
                                                        table: section.table,
                                                    };
                                                }
                                                return section;
                                            })
                                        );
                                    }}>
                                    <Radio value="true">True</Radio>
                                    <Radio value="false">False</Radio>
                                </RadioGroup>
                            </div>
                            <h3>Table</h3>
                            <div className="flex mb-[15px]">
                                {section.table.type === "Pie" ? (
                                    <></>
                                ) : (
                                    <>
                                        <h4>Rows</h4>
                                        <input
                                            className="w-fit max-w-[70px] border border-grey-light rounded ml-[5px]"
                                            type="number"
                                            value={section.table.data.length}
                                            onChange={(event) => {
                                                props.setSection(
                                                    props.section.map(
                                                        (sect: any, index: number) => {
                                                            if (index === props.index) {
                                                                if (
                                                                    event.target.value >
                                                                    section.table.data.length
                                                                ) {
                                                                    sect.table.data.push(
                                                                        section.table.data[0].map(
                                                                            () => {
                                                                                return 0;
                                                                            }
                                                                        )
                                                                    );
                                                                    sect.table.headings.rows.push(
                                                                        `Row ${sect.table.data.length}`
                                                                    );
                                                                } else {
                                                                    if (
                                                                        section.table.data.length !=
                                                                        1
                                                                    ) {
                                                                        sect.table.data.splice(
                                                                            sect.table.data.length -
                                                                                1,
                                                                            1
                                                                        );
                                                                        sect.table.headings.rows.splice(
                                                                            sect.table.headings.rows
                                                                                .length - 1,
                                                                            1
                                                                        );
                                                                    }
                                                                }

                                                                return {
                                                                    type: sect.type,
                                                                    table: sect.table,
                                                                };
                                                            }
                                                            return sect;
                                                        }
                                                    )
                                                );
                                            }}
                                        />
                                    </>
                                )}

                                <h4>Columns</h4>
                                <input
                                    className="w-fit max-w-[70px] border border-grey-light rounded ml-[5px]"
                                    type="number"
                                    value={section.table.data[0].length}
                                    onChange={(event) => {
                                        props.setSection(
                                            props.section.map((sect: any, index: number) => {
                                                if (index === props.index) {
                                                    if (
                                                        event.target.value >
                                                        section.table.data[0].length
                                                    ) {
                                                        sect.table.data.map((row: any) => {
                                                            row.push(0);
                                                            return row;
                                                        });
                                                        sect.table.headings.cols.push(
                                                            `Col ${sect.table.data[0].length}`
                                                        );
                                                        sect.table.colors.push("#109191");
                                                    } else {
                                                        if (section.table.data[0].length != 1) {
                                                            sect.table.data.map((row: any) => {
                                                                row.splice(
                                                                    sect.table.data[0].length - 1,
                                                                    1
                                                                );
                                                                return row;
                                                            });
                                                            sect.table.headings.cols.splice(
                                                                sect.table.headings.cols.length - 1,
                                                                1
                                                            );
                                                            sect.table.colors.splice(
                                                                sect.table.colors.length - 1,
                                                                1
                                                            );
                                                        }
                                                    }

                                                    return {
                                                        type: sect.type,
                                                        table: sect.table,
                                                    };
                                                }
                                                return sect;
                                            })
                                        );
                                    }}
                                />
                            </div>
                            {renderTable(section)}
                        </>
                    );
                }
                return <></>;
            })}
        </div>
    );
}
