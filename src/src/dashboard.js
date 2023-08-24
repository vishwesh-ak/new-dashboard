//dashboard

import "./index.css";
import { useState } from "react";
import Dash1 from "./dash1";
import Dash2 from "./dash2";
import Dash3 from "./dash3";
import OnboardingSeparation from "./joinleave";
export default function Dashboard(){
    const [whichDash,setWhichDash]=useState("d1");
    const [whichEmpType,setWhichEmpType]=useState("all");
    const [isDivYes,setIsDivYes]=useState("all");
    return(
        <div className="content">
            <div className="subdash">
                <div className="subdashheader">
                    <p className="subdashheaderbutton" onClick={()=>{setWhichDash("d1")}} style={{opacity:whichDash==="d1"?"100%":"30%"}}>Employee Type</p> 
                    <p className="subdashheaderbutton" onClick={()=>{setWhichDash("d2")}} style={{opacity:whichDash==="d2"?"100%":"30%"}}>Diversity</p> 
                    <p className="subdashheaderbutton" onClick={()=>{setWhichDash("d3")}} style={{opacity:whichDash==="d3"?"100%":"30%"}}>Location</p> 
                    <p className="subdashheaderbutton" onClick={()=>{setWhichDash("joinleave")}} style={{opacity:whichDash==="joinleave"?"100%":"30%"}}>Onboarding/Separation</p>
                </div>
                {whichDash==="d1"?Dash1(whichEmpType,setWhichEmpType):
                whichDash==="d2"?Dash2(isDivYes,setIsDivYes):
                whichDash==="d3"?Dash3():<OnboardingSeparation/>
                }
            </div>
        </div>
    );

    /*
<div className="row1to1">
                        <div className="box box3">
                            <div className="boxheader">Box 3</div>
                            <div className="boxarea"><Chart1/></div>
                        </div>
                        <div className="box box4">
                            <div className="boxheader">Box 4</div>
                            <div className="boxarea"><Chart3/></div>
                        </div>
                        <div className="box box5">
                            <div className="boxheader">Box 5</div>
                            <div className="boxarea"><Chart4/></div>
                        </div>
                        <div className="box box6">
                            <div className="boxheader">Box 6</div>
                            <div className="boxarea"><Chart5/></div>
                        </div>
                    </div>
    */
}