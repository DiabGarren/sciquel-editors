"use client";
import TableContainer from "@/components/table_graph/TableContainer";
import { useState } from "react";

export default function Home() {
    const [manual, setManual] = useState(false);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(2);
    let [cell, setCell] = useState([]);
    const [graphType, setGraphType] = useState("bar");

    const graphProps = {
        manual,
        setManual,
        rows,
        setRows,
        cols,
        setCols,
        cell,
        setCell,
        type: graphType,
        setType: setGraphType,
    };

    return (
        <main className="m-[50px]">
            <TableContainer
                {...graphProps}
            />
        </main>
    );
}
