import RenderTable from "./renderTable";
import Render_Graph from "./renderGraph";

export default function TableContainer(props: any) {

    //Bar graph
    // Piechart
    // Scatterplot
    // Line graph
    //Histogram
    return (
        <div className="w-[750px] mx-[auto] my-[50px]">
            <div>
                <h3>Table</h3>
                <button className="button" onClick={() => props.setManual(true)}>Enter Manually</button>
                <h4>Or</h4>
                <button className="button" onClick={() => props.setManual(false)}>
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
