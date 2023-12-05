/* eslint-disable react/jsx-key */
import {
    BarChart,
    XAxis,
    YAxis,
    Bar,
    Tooltip,
    Legend,
    Line,
    ResponsiveContainer,
    LineChart,
    AreaChart,
    Area,
    ScatterChart,
    Scatter,
    ReferenceLine,
    ReferenceDot,
    PieChart,
    Pie,
    Cell,
} from "recharts";

export default function TableGraphPreview(props: any) {
    let table: any, graphData: any, graph;
    return props.section.map((section: any, index: number) => {
        if (index === props.index) {
            switch (section.table.type) {
                case "Bar":
                    table = (
                        <div className="table-graph border border-grey-light-1 rounded-box w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto p-[2px] overflow-x-auto">
                            <div className="w-fit m-auto">
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
                        </div>
                    );
                    graphData = section.table.data.map((data: any, index: number) => {
                        return {
                            [section.table.headings.axis.x]: section.table.headings.rows[index],
                        };
                    });

                    section.table.data.forEach((row: any, rowIndex: number) => {
                        row.forEach((col: any, colIndex: number) => {
                            graphData[rowIndex][section.table.headings.cols[colIndex]] = col;
                        });
                    });

                    graph = (
                        <div className="w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto">
                            <ResponsiveContainer
                                width="100%"
                                height={350}>
                                <BarChart
                                    data={graphData}
                                    height={350}>
                                    <XAxis dataKey={section.table.headings.axis.x} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {section.table.references.map((ref: any) => {
                                        if (ref.y && ref.y != 0 && !ref.x) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    y={ref.y}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.x != 0 && !ref.y) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    x={ref.x}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.y) {
                                            <ReferenceDot
                                                x={ref.x}
                                                y={ref.y}
                                                r={5}
                                                fill={ref.color}
                                            />;
                                        }
                                    })}
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
                        </div>
                    );
                    break;

                case "Line":
                    table = (
                        <div className="table-graph border border-grey-light-1 rounded-box w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto p-[2px] overflow-x-auto">
                            <div className="w-fit m-auto">
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
                        </div>
                    );
                    graphData = section.table.data.map((data: any, index: number) => {
                        return {
                            [section.table.headings.axis.x]: section.table.headings.rows[index],
                        };
                    });

                    section.table.data.forEach((row: any, rowIndex: number) => {
                        row.forEach((col: any, colIndex: number) => {
                            graphData[rowIndex][section.table.headings.cols[colIndex]] = col;
                        });
                    });

                    graph = (
                        <div className="w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto">
                            <ResponsiveContainer
                                width="100%"
                                height={350}>
                                <LineChart
                                    data={graphData}
                                    height={350}>
                                    <XAxis dataKey={section.table.headings.axis.x} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {section.table.references.map((ref: any) => {
                                        if (ref.y && ref.y != 0 && !ref.x) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    y={ref.y}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.x != 0 && !ref.y) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    x={ref.x}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.y) {
                                            <ReferenceDot
                                                x={ref.x}
                                                y={ref.y}
                                                r={5}
                                                fill={ref.color}
                                            />;
                                        }
                                    })}
                                    {section.table.headings.cols.map((col: any, index: number) => {
                                        return (
                                            <Line
                                                type="monotone"
                                                dataKey={col}
                                                stroke={section.table.colors[index]}
                                                strokeWidth={2}
                                            />
                                        );
                                    })}
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    );
                    break;

                case "Area":
                    table = (
                        <div className="table-graph border border-grey-light-1 rounded-box w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto p-[2px] overflow-x-auto">
                            <div className="w-fit m-auto">
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
                        </div>
                    );
                    graphData = section.table.data.map((data: any, index: number) => {
                        return {
                            [section.table.headings.axis.x]: section.table.headings.rows[index],
                        };
                    });

                    section.table.data.forEach((row: any, rowIndex: number) => {
                        row.forEach((col: any, colIndex: number) => {
                            graphData[rowIndex][section.table.headings.cols[colIndex]] = col;
                        });
                    });

                    graph = (
                        <div className="w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto">
                            <ResponsiveContainer
                                width="100%"
                                height={350}>
                                <AreaChart
                                    data={graphData}
                                    height={350}>
                                    <defs>
                                        {section.table.colors.map((color: any, index: number) => {
                                            return (
                                                <linearGradient
                                                    id={`${color}-${index}`}
                                                    x1="0"
                                                    y1="0"
                                                    x2="1"
                                                    y2="1">
                                                    <stop
                                                        offset="5%"
                                                        stopColor={color}
                                                        stopOpacity={0.8}
                                                    />
                                                    <stop
                                                        offset="95%"
                                                        stopColor={color}
                                                        stopOpacity={0}
                                                    />
                                                </linearGradient>
                                            );
                                        })}
                                    </defs>
                                    <XAxis dataKey={section.table.headings.axis.x} />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    {section.table.references.map((ref: any) => {
                                        if (ref.y && ref.y != 0 && !ref.x) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    y={ref.y}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.x != 0 && !ref.y) {
                                            return (
                                                <ReferenceLine
                                                    label={ref.label}
                                                    x={ref.x}
                                                    stroke={ref.color}
                                                />
                                            );
                                        }
                                        if (ref.x && ref.y) {
                                            <ReferenceDot
                                                x={ref.x}
                                                y={ref.y}
                                                r={5}
                                                fill={ref.color}
                                            />;
                                        }
                                    })}
                                    {section.table.headings.cols.map((col: any, index: number) => {
                                        return (
                                            <Area
                                                type="monotone"
                                                dataKey={col}
                                                stroke={section.table.colors[index]}
                                                fill={`url(#${section.table.colors[index]}-${index})`}
                                                fillOpacity={1}
                                            />
                                        );
                                    })}
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    );
                    break;
                case "Pie":
                    table = (
                        <div className="table-graph border border-grey-light-1 rounded-box w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto p-[2px] overflow-x-auto">
                            <div className="w-fit m-auto">
                                <div className="flex mb-[5px]">
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
                        </div>
                    );
                    graphData = section.table.data[0].map((col: any, index: number) => {
                        return {
                            name: section.table.headings.cols[index],
                            value: parseInt(col),
                        };
                    });
                    console.log(graphData);

                    graph = (
                        <div className="w-[310px] xsm:w-[355px] sm:w-[405px] md:w-[650px] mx-auto">
                            <ResponsiveContainer
                                width="100%"
                                height={350}>
                                <PieChart height={350}>
                                    <Pie
                                        data={graphData}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={100}
                                        fill={section.table.colors[0]}
                                        label>
                                        {graphData.map((col: any, index: number) => (
                                            <Cell
                                                key={`cell-${index}`}
                                                fill={section.table.colors[index]}
                                            />
                                        ))}
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    );
                    break;

                default:
                    table = <></>;
                    graph = <></>;
                    break;
            }
            return (
                <div>
                    {section.table.display.table === "true" ? table : <></>}
                    {section.table.display.graph === "true" ? graph : <></>}
                </div>
            );
        }
        return <></>;
    });
}
