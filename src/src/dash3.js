//dashboard for work location

import "./index.css"
import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";
import ScatterChartExample from "./charts/scatterchart";
import AreaChartExample from "./charts/areachart";
import { Table } from "./charts/table";

export default function Dash3(){
    return(
                <div className="gridbg">
                    <div className='box bigbox box1'>
                        <div className="boxheader">Box 1</div>
                        <div className="boxarea">
                            {
                            Table("location")
                            }
                        </div>
                    </div>
                    <div className='box bigbox box2'>
                        <div className="boxheader">Box 2</div>
                            <div className="boxarea"><BarChartExample/></div>
                    </div>
                    <div className="box box3">
                        <div className="boxheader">Box 3</div>
                        <div className="boxarea"><AreaChartExample/></div>
                    </div>
                    <div className="box box4">
                        <div className="boxheader">Box 4</div>
                        <div className="boxarea"><LineChartExample/></div>
                    </div>
                    <div className="box box5">
                        <div className="boxheader">Box 5</div>
                        <div className="boxarea"><PieChartExample/></div>
                    </div>
                </div>
    )
}