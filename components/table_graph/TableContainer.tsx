import RenderTable from "./RenderTable";
import Render_Graph from "./RenderGraph";

export default function TableContainer(props: any) {

    //Bar graph
    // Piechart
    // Scatterplot
    // Line graph
    //Histogram
    return (
        <div>
            <div>
                <h1>Table</h1>
                <button onClick={() => props.setManual(true)}>Enter Manually</button>
                <h2>Or</h2>
                <button onClick={() => props.setManual(false)}>
                    Updload Spreadsheet
                </button>
            </div>
            <RenderTable
                manual={props.manual}
                rows={props.rows}
                setRows={props.setRows}
                cols={props.cols}
                setCols={props.setCols}
                cell={props.cell}
                setCell={props.setCell}
                type={props.type}
                setType={props.setType}
            />
            <Render_Graph
                manual={props.manual}
                type={props.type}
                setType={props.setType}
                rows={props.rows}
                cells={props.cols}
                cell={props.cell}
            />
        </div>
    );
}
