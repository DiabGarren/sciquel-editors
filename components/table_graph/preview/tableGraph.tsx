/* eslint-disable react/jsx-key */
import { BarChart, XAxis, YAxis, Bar, Tooltip, Legend, Line, ResponsiveContainer } from "recharts";

export default function TableGraphPreview(props: any) {
    return props.section.map((section: any, index: number) => {
        if (index === props.index) {
            switch (section.table.type) {
                case "Bar":
                    const table = (
                        <div className="max-w-[800px] w-fit m-auto">
                            <div className="flex mb-[5px]">
                                <div className="w-[75px] mr-[5px]"></div>
                                {section.table.headings.cols.map((colHeading: any) => {
                                    return (
                                        <input
                                            type="text"
                                            className="border border-grey-light rounded w-[75px] cursor-default"
                                            value={colHeading}
                                            readOnly
                                        />
                                    );
                                })}
                            </div>
                            {section.table.data.map((row: any, index: number) => {
                                return (
                                    <div className="flex">
                                        <input
                                            type="text"
                                            className="border border-grey-light rounded mr-[5px] w-[75px] cursor-default"
                                            value={section.table.headings.rows[index]}
                                            readOnly
                                        />
                                        {row.map((col: number, index: number) => {
                                            return (
                                                <input
                                                    type="text"
                                                    className="border border-grey-light rounded w-[75px] cursor-default"
                                                    value={col}
                                                    readOnly
                                                />
                                            );
                                        })}
                                    </div>
                                );
                            })}
                        </div>
                    );
                    const graphData = section.table.data.map((data: any, index: number) => {
                        return {
                            [section.table.headings.axis.x]: section.table.headings.rows[index],
                        };
                    });

                    section.table.data.forEach((row: any, rowIndex: number) => {
                        row.forEach((col: any, colIndex: number) => {
                            graphData[rowIndex][section.table.headings.cols[colIndex]] = col;
                        });
                    });

                    const graph = (
                        <ResponsiveContainer
                            width="100%"
                            height={250}>
                            <BarChart data={graphData}>
                                <XAxis dataKey={section.table.headings.axis.x} />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                {section.table.headings.cols.map((col: any, index: number) => {
                                    return (
                                        <Bar
                                            dataKey={col}
                                            fill={section.table.colors[index]}
                                        />
                                    );
                                })}
                                {section.table.headings.cols.map((col: any, index: number) => {
                                    return (
                                        <Line
                                            dataKey={col}
                                            fill={section.table.colors[index]}
                                        />
                                    );
                                })}
                            </BarChart>
                        </ResponsiveContainer>
                    );

                    return (
                        <div>
                            {section.table.display.table === "true" ? table : <></>}
                            {section.table.display.graph === "true" ? graph : <></>}
                        </div>
                    );
                default:
                    return <></>;
            }
        }
        return <></>;
    });
}
