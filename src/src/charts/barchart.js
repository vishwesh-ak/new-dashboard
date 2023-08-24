//sample bar graph

import { BarElement } from "chart.js";
import { BarChart, Bar, 
     CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function BarChartExample(){
    const data=[
        {name:"Jan",profit:5000},
        {name:"Feb",profit:5600},
        {name:"Mar",profit:6300},
        {name:"Apr",profit:6759},
        {name:"May",profit:7500},
        {name:"Jun",profit:7600},
        {name:"Jul",profit:7700},
        {name:"Aug",profit:8340},
        {name:"Sep",profit:8700},
        {name:"Oct",profit:9000},
        {name:"Nov",profit:9340},
        {name:"Dec",profit:9500},

    ];

    return(
        <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100%"}}>
        <div className="graph" style={{width:"100%",height:"100%",contain:"strict",overflow:"scroll"}}>
            <ResponsiveContainer>
                <BarChart
                    data={data}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#766ebc" stopOpacity={1}/>
                            <stop offset="95%" stopColor="#38bfbc" stopOpacity={1}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid stroke="#777777" opacity={"30%"}/>
                    <XAxis className="xaxistext" dataKey="name" stroke="var(--fontcolor)" fontSize={"10"}/>
                    <YAxis className="yaxistext" stroke="var(--fontcolor)" fontSize={"12"}/>
                    <Tooltip/>
                    <Legend/>

                    <Bar dataKey="profit" stroke="none" strokeWidth={"2px"} fill="url(#colorUv)" radius={[5,5,0,0]}>
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
        </div>
    );
}