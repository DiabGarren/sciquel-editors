"use client";
import TableContainer from "@/components/table_graph/TableContainer";
import { useState } from "react";

export default function Home() {
    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    return (
        <main className="m-[50px]">
            <TableContainer
                manual={manual}
                setManual={setManual}
                rows={rows}
                setRows={setRows}
                cols={cols}
                setCols={setCols}
                cell={cell}
                setCell={setCell}
                type={graphType}
                setType={setGraphType}
            />
        </main>
    );
}
