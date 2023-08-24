//sample Area chart

import {  AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer  } from "recharts";
import React, { PureComponent } from 'react';

export default function AreaChartExample(){
    const data=[
        {name:"2015",profit:5000},
        {name:"2016",profit:6700},
        {name:"2017",profit:9000},
        {name:"2018",profit:8340},
        {name:"2019",profit:7500},
        {name:"2020",profit:7700},
        {name:"2021",profit:7600},
    ];

    return(
      <>
        <div className="graph">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{top: 10,right: 30,left: 0,bottom: 0,}}
            >
              <defs>
                        <linearGradient id="colorAv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#766ebc" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#38bfbc" stopOpacity={0.6}/>
                        </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#777777"/>
              <XAxis className="xaxistext" dataKey="name" stroke="var(--fontcolor)"/>
              <YAxis className="yaxistext" stroke="var(--fontcolor)" />
              <Tooltip />
              <Legend/>
              <Area type="monotone" dataKey="profit" stroke="#8884d8" fillOpacity={1} fill="url(#colorAv)"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </>
    );
}