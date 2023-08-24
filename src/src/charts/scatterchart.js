//sample scatter plot

import { CartesianGrid, Cell,Legend, Line, LineChart, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis, ZAxis } from "recharts";

const data=[
    {x:1,y:3},
    {x:1,y:7},
    {x:1,y:14},
    {x:3,y:7},
    {x:3,y:4},
    {x:5,y:2},
    {x:5,y:20},
    {x:5,y:15},
    {x:6,y:17},
    {x:9,y:7},
    {x:9,y:10},
    {x:10,y:15},
    {x:10,y:13},
    {x:15,y:21},
    {x:16,y:19},
    {x:17,y:2},
    {x:17,y:22},
    {x:20,y:15},
];
const colors=["red","blue","yellow","lime","magenta","darkgreen","cyan"]

function getColor(index){
    var val=Math.floor((data[index]["x"]+data[index]["y"])/6);
    return colors[val];

}
export default function ScatterChartExample(){
    return(
        <>
            <div className="graph" style={{alignContent:"center",justifyContent:"center"}}>
                <ResponsiveContainer>
                    <ScatterChart>
                        <CartesianGrid stroke="#555555" />
                        <XAxis className="xaxistext" type="number" dataKey="x" stroke="var(--fontcolor)"/>
                        <YAxis className="yaxistext" type="number" dataKey="y" stroke="var(--fontcolor)"/>
                        <ZAxis range={[35]}/>
                        <Tooltip/>
                        <Scatter data={data} strokeWidth={"1px"} fill="none">{
                            data.map((entry, index) => <Cell stroke="var(--fontcolor)" fill={getColor(index)}/>)
                        } 
                        </Scatter>  
                    </ScatterChart>
                </ResponsiveContainer>
            </div>
        </>
    );
}