/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { TrashIcon } from "@heroicons/react/20/solid";

export default function RenderTable(props: any) {
    if (props.manual === false) {
        return <></>;
    } else {
        if (props.cell.length == 0) {
            let cell = [];
            for (let i = 0; i < props.rows; i++) {
                let row = [];
                for (let j = 0; j < props.cols; j++) {
                    if (i === 0 && j === 0 && props.type !== "pie") {
                        row.push("Headings");
                    } else if (j === 0 && props.type === "bar") {
                        row.push(`Col ${i}`);
                    } else {
                        row.push(0);
                    }
                }
                cell.push(row);
                props.cell.push(row);
            }

            props.setCell(cell);
        }

        let table = [];
        for (let row = 0; row < props.rows; row++) {
            let colsCel = [];
            for (let col = 0; col < props.cols; col++) {
                if (row === 0) {
                    if (props.type !== "pie") {
                        if (col === 0) {
                            if (props.type === "bar") {
                                colsCel.push(<td></td>);
                            } else {
                                colsCel.push(
                                    <td className="border-[2px] border-[#9A9B9C]">
                                        <input
                                            placeholder="X Heading"
                                            onChange={(event) => {
                                                const newCell = props.cell.map(
                                                    (
                                                        cellRow: any,
                                                        cellIndex: any
                                                    ) => {
                                                        if (cellIndex === row) {
                                                            const newRow =
                                                                cellRow.map(
                                                                    (
                                                                        cellCol: any,
                                                                        index: any
                                                                    ) => {
                                                                        if (
                                                                            index ===
                                                                            col
                                                                        ) {
                                                                            return event
                                                                                .target
                                                                                .value;
                                                                        } else {
                                                                            return cellCol;
                                                                        }
                                                                    }
                                                                );
                                                            return newRow;
                                                        } else {
                                                            return cellRow;
                                                        }
                                                    }
                                                );
                                                props.setCell(newCell);
                                            }}
                                        />
                                    </td>
                                );
                            }
                        } else {
                            if (props.type === "bar") {
                                colsCel.push(
                                    <td className="border-[2px] border-[#9A9B9C]">
                                        <input
                                            placeholder="Heading"
                                            onChange={(event) => {
                                                const newCell = props.cell.map(
                                                    (
                                                        cellRow: any,
                                                        cellIndex: any
                                                    ) => {
                                                        if (cellIndex === row) {
                                                            const newRow =
                                                                cellRow.map(
                                                                    (
                                                                        cellCol: any,
                                                                        index: any
                                                                    ) => {
                                                                        if (
                                                                            index ===
                                                                            col
                                                                        ) {
                                                                            return event
                                                                                .target
                                                                                .value;
                                                                        } else {
                                                                            return cellCol;
                                                                        }
                                                                    }
                                                                );
                                                            return newRow;
                                                        } else {
                                                            return cellRow;
                                                        }
                                                    }
                                                );
                                                props.setCell(newCell);
                                            }}
                                        />
                                    </td>
                                );
                            } else {
                                colsCel.push(
                                    <td className="border-[2px] border-[#9A9B9C]">
                                        <input
                                            placeholder="Y Heading"
                                            onChange={(event) => {
                                                const newCell = props.cell.map(
                                                    (
                                                        cellRow: any,
                                                        cellIndex: any
                                                    ) => {
                                                        if (cellIndex === row) {
                                                            const newRow =
                                                                cellRow.map(
                                                                    (
                                                                        cellCol: any,
                                                                        index: any
                                                                    ) => {
                                                                        if (
                                                                            index ===
                                                                            col
                                                                        ) {
                                                                            return event
                                                                                .target
                                                                                .value;
                                                                        } else {
                                                                            return cellCol;
                                                                        }
                                                                    }
                                                                );
                                                            return newRow;
                                                        } else {
                                                            return cellRow;
                                                        }
                                                    }
                                                );
                                                props.setCell(newCell);
                                            }}
                                        />
                                    </td>
                                );
                            }
                        }
                    }
                } else if (
                    col === 0 &&
                    props.type !== "scatter" &&
                    props.type !== "line"
                ) {
                    colsCel.push(
                        <td className="border-[2px] border-[#CDCED1]">
                            <input
                                onChange={(event) => {
                                    const newCell = props.cell.map(
                                        (cellRow: any, cellIndex: any) => {
                                            if (cellIndex === row) {
                                                const newRow = cellRow.map(
                                                    (
                                                        cellCol: any,
                                                        index: any
                                                    ) => {
                                                        if (index === col) {
                                                            return event.target
                                                                .value;
                                                        } else {
                                                            return cellCol;
                                                        }
                                                    }
                                                );
                                                return newRow;
                                            } else {
                                                return cellRow;
                                            }
                                        }
                                    );
                                    props.setCell(newCell);
                                }}
                            />
                        </td>
                    );
                } else {
                    colsCel.push(
                        <td className="border-[2px] border-[#CDCED1]">
                            <input
                                type="number"
                                onChange={(event) => {
                                    const newCell = props.cell.map(
                                        (cellRow: any, cellIndex: any) => {
                                            if (cellIndex === row) {
                                                const newRow = cellRow.map(
                                                    (
                                                        cellCol: any,
                                                        index: any
                                                    ) => {
                                                        if (index === col) {
                                                            if (
                                                                event.target
                                                                    .value == ""
                                                            ) {
                                                                return 0;
                                                            } else {
                                                                return event
                                                                    .target
                                                                    .value;
                                                            }
                                                        } else {
                                                            return cellCol;
                                                        }
                                                    }
                                                );
                                                return newRow;
                                            } else {
                                                return cellRow;
                                            }
                                        }
                                    );
                                    props.setCell(newCell);
                                }}
                            />
                        </td>
                    );
                }
            }
            if (props.type === "bar") {
                if (row == 0) {
                    colsCel.push(
                        <td rowSpan={props.rows}>
                            <button
                                className="block rounded-[50%] bg-[#57ADDE] text-white w-[25px] text-center hover:bg-[#8ECAEC]"
                                onClick={() => {
                                    props.setCols(props.cols + 1);
                                    let cell = props.cell.map(
                                        (row: any, index: number) => {
                                            if (index === 0) {
                                                row.push(props.cols);
                                            } else {
                                                row.push(0);
                                            }
                                            return row;
                                        }
                                    );

                                    props.setCell(cell);
                                }}
                            >
                                +
                            </button>
                            <button
                                className="block"
                                onClick={() => {
                                    props.setCols(props.cols - 1);
                                    let cell = props.cell.map((row: any) => {
                                        row.pop();
                                        return row;
                                    });

                                    props.setCell(cell);
                                }}
                            >
                                <TrashIcon
                                    className="trash-icon"
                                    aria-hidden="true"
                                />
                            </button>
                        </td>
                    );
                }
            }
            table.push(<tr>{colsCel}</tr>);
        }
        table.push(
            <tr>
                <td
                    style={{ width: props.cols * 100 + "%" }}
                    className="flex justify-center text-center"
                    colSpan={props.cols}
                >
                    <button
                        className="block rounded-[50%] bg-[#57ADDE] text-white w-[25px] items-center text-center hover:bg-[#8ECAEC]"
                        onClick={() => {
                            props.setRows(props.rows + 1);
                            let newRow: string[] = [];
                            if (props.type === "bar") {
                                newRow = [`Col ${props.cell.length + 1}`];
                            } else {
                                newRow = ["0"];
                            }
                            for (let i = 0; i < props.cols - 1; i++) {
                                newRow.push("0");
                            }
                            props.setCell((cell: any) => [...cell, newRow]);
                        }}
                    >
                        +
                    </button>
                    <button
                        className="block"
                        onClick={() => {
                            props.setRows(props.rows - 1);
                            let cell = props.cell;
                            cell.pop();

                            props.setCell(cell);
                        }}
                    >
                        <TrashIcon className="trash-icon" aria-hidden="true" />
                    </button>
                </td>
            </tr>
        );
        return (
            <div>
                <table>
                    <tbody>{table}</tbody>
                </table>
                <button
                    className="block rounded-[5px] p-[2px] bg-[#57ADDE] text-white items-center text-center hover:bg-[#8ECAEC]"
                    onClick={() => {
                        props.setCell([]);
                        props.setRows(3);
                        props.setCols(2);
                    }}
                >
                    Reset&#8634;
                </button>
                <div>
                    <h3>Graph Type:</h3>
                    <button
                        className="bg-[#57ADDE] underline rounded-[5px] mx-[2px] px-[4px] text-white hover:bg-[#8ECAEC]"
                        onClick={() => {
                            props.setType("bar");
                            props.setCell([]);
                            props.setRows(3);
                            props.setCols(2);
                        }}
                    >
                        Bar Graph
                    </button>
                    <button
                        className="bg-[#57ADDE] underline rounded-[5px] mx-[2px] px-[4px] text-white hover:bg-[#8ECAEC]"
                        onClick={() => {
                            props.setType("pie");
                            props.setCell([]);
                            props.setRows(3);
                            props.setCols(2);
                        }}
                    >
                        Pie Chart
                    </button>
                    <button
                        className="bg-[#57ADDE] underline rounded-[5px] mx-[2px] px-[4px] text-white hover:bg-[#8ECAEC]"
                        onClick={() => {
                            props.setType("scatter");
                            props.setCell([]);
                            props.setRows(3);
                            props.setCols(2);
                        }}
                    >
                        Scatter Plot
                    </button>
                    <button
                        className="bg-[#57ADDE] underline rounded-[5px] mx-[2px] px-[4px] text-white hover:bg-[#8ECAEC]"
                        onClick={() => {
                            props.setType("line");
                            props.setCell([]);
                            props.setRows(3);
                            props.setCols(2);
                        }}
                    >
                        Line Graph
                    </button>
                </div>
            </div>
        );
    }
}
