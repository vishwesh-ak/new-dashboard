//placeholder page for onboarding/separation
import "./index.css";
import JoinLinechart from "./charts/joinlinechart";
import PlotLinechart from "./charts/plot_linechart";
import Data from "./charts/data/joinleavedata";
import getRemainingStrength from "./charts/data/joinleavedata"

export default function OnboardingSeparation(){
    var formattedDataJoin=Data("join_data")
    var formattedDataLeave=Data("leave_data")
    var formattedDataEmpType=Data("emp_type")
    var formattedDataDiv=Data("diversity")
    return(
        <div>
            <div className="gridbg">
                    <div className='box bigbox box1'>
                        <div className="boxheader">Box 1</div>
                        <div className="boxarea">
                            {PlotLinechart(formattedDataJoin,"date","value")}
                        </div>
                    </div>
                    <div className='box bigbox box2'>
                        <div className="boxheader">Box 2</div>
                        <div className="boxarea">
                            <div style={{display:"flex",flexDirection:"column"}}>
                                <p>Number of people still in the company: {getRemainingStrength(formattedDataLeave)}</p>
                                <p>Number of people that left:</p>
                            </div>
                        </div>
                    </div>
                    <div className='box bigbox box2'>
                        <div className="boxheader">Box 1</div>
                        <div className="boxarea">
                            {PlotLinechart(formattedDataEmpType,"date","value")}
                        </div>
                    </div>
                    <div className='box bigbox box1'>
                        <div className="boxheader">Box 2</div>
                        <div className="boxarea">{PlotLinechart(formattedDataDiv,"date","value")}</div>
                    </div>
                </div>
        </div>
    )
}
