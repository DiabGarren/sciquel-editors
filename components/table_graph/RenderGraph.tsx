import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Bar,
    PieChart,
    Pie,
    Cell,
    ScatterChart,
    Scatter,
    LineChart,
    Line,
} from "recharts";

/* eslint-disable react/jsx-key */
export default function Render_Graph(props: any) {
    if (props.manual === false) {
        return <></>;
    } else {
        const colors = ["#8ECAEC", "#FF0000", "#00FF00", "#0000FF"];
        let data: any[] = [];
        let max = 200;
        let points: any[];
        let scaleFactor: number;
        let x: any;
        let y: any;

        switch (props.type) {
            case "bar":
                // let barMax = 0;
                // let width = 50;
                // graph = [];

                // props.cell.forEach((row: any[]) => {
                //     for (let i = 1; i < row.length; i++) {
                //         if (parseInt(row[i]) > barMax) {
                //             barMax = parseInt(row[i]);
                //         }
                //     }
                // });

                // scaleFactor = 0;
                // if (barMax !== 0) {
                //     scaleFactor = (max * 0.9) / barMax;
                // }

                // props.cell.forEach((row: any[]) => {
                //     let bars = [];
                //     width = 150 / row.length;
                //     for (let i = 1; i < row.length; i++) {
                //         bars.push(
                //             <div
                //                 style={{
                //                     position: "relative",
                //                     top: `${max - row[i] * scaleFactor - 1}px`,
                //                     width: `${width}px`,
                //                     height: row[i] * scaleFactor + "px",
                //                     background: colors[i - 1],
                //                     display: "flex",
                //                     alignItems: "flex-start",
                //                     justifyContent: "center",
                //                 }}
                //             >
                //                 <p
                //                     style={{
                //                         position: "relative",
                //                         top: `${-21}px`,
                //                     }}
                //                 >
                //                     {row[i]}
                //                 </p>
                //             </div>
                //         );
                //     }
                //     graph.push(
                //         <div
                //             style={{
                //                 display: "grid",
                //                 gridTemplateColumns: `repeat(${
                //                     row.length - 1
                //                 }, ${width}px)`,
                //                 gridTemplateRows: `${max}px 50px`,
                //             }}
                //         >
                //             {bars}
                //             <p
                //                 style={{
                //                     gridColumn: `1/${row.length}`,
                //                     textAlign: "center",
                //                 }}
                //             >
                //                 {row[0]}
                //             </p>
                //         </div>
                //     );
                // });

                // //

                // return (
                //     <div>
                //         <div
                //             className="flex w-[100%] border-[1px] gap-[10px]"
                //             style={{
                //                 height: `${max}px`,
                //             }}
                //         >
                //             {graph}
                //         </div>
                //     </div>
                // );

                let bar: any[] = [];

                data = props.cell.map((row: any[], i: number) => {
                    let obj: {} = {};
                    if (i === 0) {
                        row.forEach((col, index) => {
                            if (index > 0) {
                                let key = `${col}`;

                                bar.push(
                                    <Bar dataKey={key} fill={colors[index]} />
                                );
                            }
                        });
                    }

                    if (i > 0) {
                        row.forEach((col, index) => {
                            if (index === 0) {
                                Object.assign(obj, { name: col });
                            } else if (index > 0) {
                                let key = `${props.cell[0][index]}`;

                                Object.assign(obj, { [key]: parseFloat(col) });
                            }
                        });
                    }
                    return obj;
                });
                data.splice(0, 1);

                return (
                    <BarChart width={730} height={300} data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {bar}
                    </BarChart>
                );

            case "pie":
                data = props.cell.map((row: any[], i: number) => {
                    return { name: row[0], value: parseFloat(row[1]) };
                });
                data.splice(0, 1);

                return (
                    <PieChart width={400} height={300}>
                        <Tooltip />
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            label
                        >
                            {data.map((entry, i) => {
                                return (
                                    <Cell key={`cell-${i}`} fill={colors[i]} />
                                );
                            })}
                        </Pie>
                    </PieChart>
                );

            case "scatter":
                data = props.cell.map((row: any[], i: number) => {
                    if (i === 0) {
                        x = row[0];
                        y = row[1];
                    } else {
                        return { x: parseFloat(row[0]), y: parseFloat(row[1]) };
                    }
                });
                data.splice(0, 1);
                console.log(data);

                return (
                    <ScatterChart width={730} height={300}>
                        <XAxis dataKey="x" type="number" name={x} />
                        <YAxis dataKey="y" type="number" name={y} />
                        <Tooltip />
                        <Scatter name="graph" data={data} fill={colors[0]} />
                    </ScatterChart>
                );

            case "line":
                data = props.cell.map((row: any[], i: number) => {
                    if (i === 0) {
                        x = row[0];
                        y = row[1];
                    } else {
                        return { x: parseFloat(row[0]), y: parseFloat(row[1]) };
                    }
                });
                data.splice(0, 1);

                return (
                    <LineChart width={730} height={300} data={data}>
                        <XAxis dataKey="x" type="number" name={x} />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="y" />
                    </LineChart>
                );
        }
    }
}
