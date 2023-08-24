//sample linechart

import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function LineChartExample(){
    const data=[
        {name:"2015",profit:5000},
        {name:"2016",profit:6700},
        {name:"2017",profit:1000},
        {name:"2018",profit:8340},
        {name:"2019",profit:7500},
        {name:"2020",profit:7700},
        {name:"2021",profit:7600},
        {name:"2022",profit:9900},
        {name:"2023",profit:6370},
        
    ];

    return(
        <>
            <div className="graph">
                <ResponsiveContainer>
                    <LineChart
                        data={data}
                    >
                        <CartesianGrid stroke="#555555"/>
                        <XAxis className="xaxistext" dataKey="name" stroke="var(--fontcolor)"/>
                        <YAxis className="yaxistext" stroke="var(--fontcolor)"/>
                        <Tooltip itemStyle={{color:"var(--fontcolor"}}/>
                        <Legend 
                            formatter={(value,entry,index)=> 
                            <span style={{color:"var(--fontcolor)"}}>{value}</span>}
                        />

                        <Line dataKey="profit" stroke="#38bfbc" strokeWidth={"2px"} fill="#766ebc"/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}