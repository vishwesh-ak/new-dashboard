export default public Data(){
    var divdata={"rows":[
        {"key":[2000,1,null,null,"N"],"value":1},
        {"key":[2004,11,null,null,"Y"],"value":1},
        {"key":[2023,7,2023,8,"Y"],"value":2},
        {"key":[2023,8,null,null,"Y"],"value":1}
        ]}
    
    divdata=padMonths(divdata)
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