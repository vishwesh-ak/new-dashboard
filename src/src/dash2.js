//dashboard for diversity

import "./index.css"
import PieChartExample from "./charts/piechart";
import BarChartExample from "./charts/barchart";
import LineChartExample from "./charts/linechart";
import ScatterChartExample from "./charts/scatterchart";
import AreaChartExample from "./charts/areachart";
import { Table } from "./charts/table";
import { useState } from "react";

export default function Dash2(isDivYes,setIsDivYes){
        return(
                <div className="gridbg">
                    <div className='box bigbox box1'>
                        <div className="boxheader">Box 1</div>
                        <div className="boxarea">
                            <div class="filtertable">
                                <div style={{width:"fit-content",alignItems:"center"}}><p style={{fontSize:"14px",margin:"5px 0px 0px 5px",whiteSpace:"nowrap"}}>Choose Diversity Type :</p>
                                </div>
                                <div onClick={()=>{setIsDivYes(isDivYes==="Y"?"N":isDivYes==="N"?"all":"Y")}} style={{display:"flex",margin:"5px 0px 0px 5px",borderRadius:"25px",backgroundColor:"#77777717",width:"fit-content",padding:"5px",fontSize:"14px",cursor:"pointer",userSelect:"none"}}>
                                    <div style={{opacity:isDivYes==="Y"?"1":"0.3",margin:"0px 10px 0px 10px"}}>Y</div>/
                                    <div style={{opacity:isDivYes==="N"?"1":"0.3",margin:"0px 10px 0px 10px"}}>N</div>/
                                    <div style={{opacity:isDivYes==="all"?"1":"0.3",margin:"0px 10px 0px 10px"}}>All</div>
                                </div>
                            </div>
                            {
                                Table("diversity",isDivYes)
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