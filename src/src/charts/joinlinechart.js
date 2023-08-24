
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "../index.css"

export default function JoinLinechart(){
    var data={"rows":[
        {"key":[2000,"Jan"],"value":1},
        {"key":[2000,"Feb"],"value":1},
        {"key":[2000,"Mar"],"value":2},
        {"key":[2000,"Apr"],"value":1}
    ]}

    
    var COLOR1 = ["#FE8468","#5DD8B0","#568FF4","#E772E8"];

    const formattedData = data.rows.map(item => ({
        year: item.key[0],
        month: item.key[1],
        time: item.key[0] + " " +item.key[1],
        value: item.value,
        stroke:"green"
      }));

    return(
        <>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart
                        data={formattedData}
                    >
                        <CartesianGrid stroke="#55555555"/>
                        <XAxis className="xaxistext" dataKey="time" stroke="var(--fontcolor)"/>
                        <YAxis className="yaxistext" stroke="var(--fontcolor)" />
                        <Tooltip itemStyle={{color:"var(--fontcolor"}}/>
                        <Legend 
                            formatter={(value,entry,index)=> 
                            <span style={{color:"var(--fontcolor)"}}>{value}</span>}
                        />

                        <Line dataKey="value" stroke="#38bfbc" strokeWidth={"2px"} fill="#766ebc"/>
                    </LineChart>
                </ResponsiveContainer>
        </>
    );
}

