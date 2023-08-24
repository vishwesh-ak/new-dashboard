//sample pie chart

import { Colors } from "chart.js";
import TrialData from "./data/trialdata";
import {PieChart,Pie, ResponsiveContainer, Tooltip,Cell, Legend} from "recharts";


var COLOR1 = ["#FE8468","#5DD8B0","#568FF4","#E772E8"];
var COLOR2=["#F9669F","#37BBC1","#2272DA","#9A66F6"];

function PieChartExample(){
    const data=TrialData();
    return(
        <>
            <div className="graph" style={{width:"100%",height:"100%"}}>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <PieChart>
                        <defs>
                            {
                            COLOR1.map((entry,index)=>
                            <linearGradient id={"colorpieslice"+index} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="10%" stopColor={COLOR1[index%COLOR1.length]} stopOpacity={1}/>
                            <stop offset="90%" stopColor={COLOR2[index%COLOR2.length]} stopOpacity={1}/>
                            </linearGradient>)
                            }   
                        </defs>
                        <getGradientCode/>
                        <Pie data={data} innerRadius={"50%"} dataKey="sold" stroke='var(--boxfill)' strokeWidth={"6px"} >
                        {
                            data.map((entry, index) => <Cell fill={"url(#colorpieslice"+index+")"}/>)
                        }            
                        </Pie> 
                    <Tooltip/>
                    <Legend
                        formatter={(value, entry, index) => 
                            <span className="xaxistext" style={{color:"var(--fontcolor)",padding:"0px"}}>{value}</span>}/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </>
    )
}
export default PieChartExample;
