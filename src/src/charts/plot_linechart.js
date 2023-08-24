
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../index.css"

export default function PlotLinechart(formattedData,xaxiskey,yaxiskey){    
    var COLOR1 = ["#FE8468","#5DD8B0","#568FF4","#E772E8"];

    return(
        <>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart
                        data={formattedData}
                    >
                        <CartesianGrid stroke="#55555555"/>
                        <XAxis className="xaxistext" dataKey={xaxiskey}
                         stroke="var(--fontcolor)"/>
                        <YAxis className="yaxistext" stroke="var(--fontcolor)" />
                        <Tooltip itemStyle={{color:"var(--fontcolor"}}/>
                        <Legend 
                            formatter={(value,entry,index)=> 
                            <span style={{color:"var(--fontcolor)"}}>{value}</span>}
                        />

                        <Line dataKey={yaxiskey} stroke="#38bfbc" strokeWidth={"2px"} fill="#766ebc"/>
                    </LineChart>
                </ResponsiveContainer>
        </>
    );
}

