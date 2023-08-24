export default function Data(val="all"){
    var datajoin={"rows":[
        {"key":[2000,1],"value":1},
        {"key":[2001,2],"value":1},
        {"key":[2002,3],"value":2},
        {"key":[2003,4],"value":1}
    ]}

    var dataleave={"rows":[
        {"key":[null,null],"value":3},
        {"key":[2023,8],"value":2}
        ]}

    var datadiv={"rows":[
        {"key":[2000,1,null,null,"N"],"value":1},
        {"key":[2004,11,null,null,"Y"],"value":1},
        {"key":[2023,7,2023,8,"Y"],"value":2},
        {"key":[2023,8,null,null,"Y"],"value":1}
    ]}

    var dataemptype={"rows":[
        {"key":[2000,1,null,null,"N"],"value":1},
        {"key":[2004,11,null,null,"Y"],"value":1},
        {"key":[2023,7,2023,8,"Y"],"value":2},
        {"key":[2023,8,null,null,"Y"],"value":1}
    ]}

    datajoin=padMonths(datajoin);
    dataemptype=padMonths(dataemptype);
    datadiv=padMonths(datadiv);

    const formattedDataJoin = datajoin.rows.map(item => ({
        year: item.key[0],
        month: item.key[1],
        date: item.key[1] + "/" +item.key[0],
        value: item.value,
        stroke:"green"
      }));
      
    const formattedDataLeave = dataleave.rows.map(item => ({
        year: item.key[0],
        month: item.key[1],
        date: item.key[0] + " " +item.key[1],
        value: item.value,
        stroke:"green"
      }));

    const formattedDataEmpType = dataemptype.rows.map(item => ({
        year: item.key[0],
        month: item.key[1],
        yearleave: item.key[2],
        monthleave: item.key[3],
        date: item.key[1] + "/" +item.key[0],
        leavedate: item.key[3] + "/"+item.key[2],
        value: item.value,
        stroke:"yellow"
      }));
      
    const formattedDataDiv = datadiv.rows.map(item => ({
        year: item.key[0],
        month: item.key[1],
        yearleave: item.key[2],
        monthleave: item.key[3],
        date: item.key[1] + "/" +item.key[0],
        leavedate: item.key[3] + "/"+item.key[2],
        value: item.value,
        stroke:"cyan"
      }));
    var overalldata={"join_data":formattedDataJoin,"leave_data":formattedDataLeave,
                    "emp_type":formattedDataEmpType,"diversity":formattedDataDiv}
    
    if(val==="all")
      return overalldata
    else
      return overalldata[val]
}

function getRemainingStrength(data){
    var i=0;
    for(var i=0;i<data.rows.length;i++){
        if(data.rows[i].key[0]==null && data.rows[i].key[1]==null){
            return <div>data.rows[i].value</div>;
        }
    }
    return 0;
}

function padMonths(data){
    var a1=data.rows[0].key[0];
    var b1=data.rows[0].key[1];
    var a2,b2,i,j,k,v;
    var len=data.rows.length;
    var newdat=[{key:[a1,b1],value:1}]
    for(i=1;i<len;i++){
        a2=data.rows[i].key[0];
        b2=data.rows[i].key[1];
        v=data.rows[i].value;
        for(j=b1+1;(a1==a2&&j<=b2)||(a1!=a2&&j<=12);j++){
            newdat.push({key:[a1,j],value:0})
        }
        for(k=a1+1;k<a2;k++){
            for(j=1;j<=12;j++){
               newdat.push({key:[k,j],value:0}) 
            }
        }
        for(j=1;j<b2;j++)
            newdat.push({key:[k,j],value:0})
        newdat.push({key:[a2,b2],value:v})
        a1=a2;
        b1=b2;
    }
    return {rows:newdat}
}