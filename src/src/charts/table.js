//table plotter function

import TableData from "./data/maindata";

export function Table(criteria,expectedval="all"){
    const data=TableData();
    var count=0;
    var copy;
    return(
        <div style={{marginBottom:"auto",marginTop:"0px",width:"100%"}}>
            <table className="table">
                <tr className="oddrow">
                    <th>Column1</th>
                    <th>Column2</th>
                    <th>Column3</th>
                    <th>Column4</th>
                    <th>Column5</th>
                    <th>Column6</th>
                    <th>Column7</th>
                    <th>Column8</th>
                    <th>Column9</th>
                    <th>Column10</th>
                    <th>Column11</th>
                    <th>Column12</th>
                    <th>Cloumn13</th>
                </tr>
                {
                    data.map((val, key) => {
                        if(criteria==="diversity")
                            copy=val.k;
                        else if(criteria==="emptype")
                            copy=val.l;
                        else
                            copy=val.m;
                        if(copy===expectedval || expectedval==="all"){
                            count=count+1;
                        return (
                            <tr className={count%2==1?"evenrow":"oddrow"} key={key} onClick={()=>{console.log("Key is "+key)}}>
                                <td>{val.a}</td>
                                <td>{val.b}</td>
                                <td>{val.c}</td>
                                <td>{val.d}</td>
                                <td>{val.e}</td>
                                <td>{val.f}</td>
                                <td>{val.g}</td>
                                <td>{val.h}</td>
                                <td>{val.i}</td>
                                <td>{val.j}</td>
                                <td>{val.k}</td>
                                <td>{val.l}</td>
                                <td>{val.m}</td>
                            </tr>
                        )
                        }}
                    )
                }
            </table>
        </div>
    )
}